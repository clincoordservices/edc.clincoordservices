import User from '@/src/entities/User';
import MongooseUserRepository from '@/src/infrastructure/database/MongoDBAdapter';
import MongooseConnect from '@/src/infrastructure/database/mongooseconnection';
import UserUseCase from '@/src/infrastructure/database/use-case';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const mongoConnectionString = "mongodb://localhost:27017/clicncoordservices";
  const mongooseConnection = new MongooseConnect(mongoConnectionString);
  
  // Repositório e UseCase usando o Mongoose
  const userRepository = new MongooseUserRepository(mongooseConnection);
  const userUseCase = new UserUseCase(userRepository);

  const newUser: User = {
    first_name: 'John',
    last_name: 'Doe',
    middle_name: 'M',
    email: 'john.doe@example.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project: 'Example Project',
    role: 'Developer',
    access_level: 'Admin',
  };

  const res_ = await userUseCase.createUser(newUser)
  console.log(res_)
    try {
          const {first_name} = req.body
          res.status(200).json({first_name })
  } catch (err) {
    res.status(500).json({ error: 'failed to load data' })
  }
}