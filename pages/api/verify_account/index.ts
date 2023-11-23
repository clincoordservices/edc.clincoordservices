import GetUser from "@/src/application/user/getUser";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { NextApiRequest, NextApiResponse } from "next";


export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
    const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME! as string ;
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const searchUser = new GetUser(userRepository);
    const method = req.method;
    const {email} = req.body

   try {
      if(method === 'POST'){
          await mongoAdapter.connect();
          const user = await searchUser.perform(email);


          await mongoAdapter.close();
          return res.json({user});
    }
   } catch(err){
      throw new Error("Intern Error. Report it.");
   }
}