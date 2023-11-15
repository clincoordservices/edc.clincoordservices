import { NextApiRequest, NextApiResponse } from "next";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { comparePassword } from "@/src/utils/hashPassword";
import User from "@/src/entities/User";
import { generateJWT } from "@/src/utils/jwt/generateJWT";
import { setAuthCookie } from "@/src/utils/cookieGenerator";

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = "mongodb://localhost:27017/clicncoordservices" ;
    const dbName = 'clicncoordservices';
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const {email, password} = req.body

   try {
        await mongoAdapter.connect();
        const user = await userRepository.getUserByEmail(email);

        if(Object.keys(user).length === 0) {
          await mongoAdapter.close();
          return res.status(400).json({message: "Inavlid credencials!", result: false});
        }
    const  user_ =  user as User;
    const result = await comparePassword(password, user_.password);

    if(!result) {
      await mongoAdapter.close();
      return res.status(400).json({message: "Inavlid credencials!", result: false});
    }

    const token = generateJWT(user_);
    setAuthCookie(res, token);
    await mongoAdapter.close();
    return res.json({token, user, result});

   } catch(err){
      throw new Error("Intern Error. Report it.");
   }
}

