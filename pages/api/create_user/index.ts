import CreateUser from "@/src/application/user/createUser";
import User from "@/src/entities/User";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { hashPassword } from "@/src/utils/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI! as string;
    const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME! as string ;
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const createUser = new CreateUser(userRepository);
    const method = req.method;
    const id = "";
    const {access_level, email, institute:institution, role, password, project_id, middle_name, first_name, last_name, company} = req.body
    const passwordHash = await hashPassword(password);
   
   try {
        await mongoAdapter.connect();
      if(method === 'POST'){
         
         const isCreated = await createUser.perform({id, first_name,last_name, access_level, email, institution, role, password:passwordHash, project_id, middle_name, company});
         await mongoAdapter.close();
         res.json({message: req.body.user_email, isCreated});
    }
   } catch(err){
      throw new Error("Intern Error. Report it.");
   }
}