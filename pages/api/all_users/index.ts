import ListUser from '@/src/application/user/listUsers';
import MongoDBAdapter from '@/src/infrastructure/database/mongodb/MongoDBAdapter';
import UserRepositoryDatabase from '@/src/infrastructure/repository/database/userRepositoryDatabase';
import { getAuthCookie } from '@/src/utils/cookieGenerator';
import type { NextApiRequest, NextApiResponse } from 'next';
 
export default async function GET(req: NextApiRequest,res: NextApiResponse) {
    const mongoUri = process.env.NEXT_PUBLIC_MONGODB_URI as string;
    const dbName = process.env.NEXT_PUBLIC_DATABASE_NAME! as string ;
    const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
    const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
    const listUser = new ListUser(userRepository);
    try {
         const userToken_ = process.env.NEXT_PUBLIC_COOKIE_ADMIN! as string;
        await mongoAdapter.connect();
        const cookieUser = getAuthCookie(req, userToken_);

        const users = await listUser.perform();
        await mongoAdapter.close();
        res.json({mesage: "user returned", users, userToken_: cookieUser});
  } catch (err) {
    res.status(500).json({error: 'failed to load data'})
  }
}