import GetUser from '@/src/application/user/getUser';
import User from '@/src/entities/User';
import MongoDBAdapter from '@/src/infrastructure/database/mongodb/MongoDBAdapter';
import UserRepositoryDatabase from '@/src/infrastructure/repository/database/userRepositoryDatabase';
import { getAuthCookie } from '@/src/utils/cookieGenerator';
import { verifyJWT } from '@/src/utils/jwt/generateJWT';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function GET(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
    const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME! as string ;
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const searchUser = new GetUser(userRepository);
    try {
        await mongoAdapter.connect();
        const cookieUser = getAuthCookie(req, process.env.NEXT_PUBLIC_COOKIE_USER! as string);
        const {email} = verifyJWT(cookieUser as string) as User;

        const user = await searchUser.perform(email);
        await mongoAdapter.close();
        const user_ = {...user, password:""}; 
        res.json({mesage: "user returned", user_});
  } catch (err) {
    res.status(500).json({error: 'failed to load data'})
  }
}