import { NextApiRequest, NextApiResponse } from "next";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { comparePassword, hashPassword } from "@/src/utils/hashPassword";
import User from "@/src/entities/User";
import { generateJWT } from "@/src/utils/jwt/generateJWT";
import { setAuthCookie } from "@/src/utils/cookieGenerator";
import GetUser from "@/src/application/user/getUser";

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
    const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME! as string ;
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const searchUser = new GetUser(userRepository);
    const method = req.method;
    const {email, password} = req.body

   try {
      if(method === 'POST'){
          await mongoAdapter.connect();
          const user = await searchUser.perform(email);
          console.log(user)
          if(Object.keys(user).length === 0){
            await mongoAdapter.close();
            return res.status(400).json({message: "Inavlid credencials!", result: false});
          }
        const  user_ =  user as User;
        const pass = await hashPassword(password);
        const result = await comparePassword(password, pass);

      if(!result) {
        await mongoAdapter.close();
        return res.status(400).json({message: "Inavlid credencials!", result: false});
      }

      const token = generateJWT(user_);
      setAuthCookie(res, token, process.env.NEXT_PUBLIC_COOKIE_USER! as string);
      await mongoAdapter.close();
      return res.json({token, user, result});
    }
   } catch(err){
      throw new Error("Intern Error. Report it.");
   }
}

