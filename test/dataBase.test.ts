// __tests__/database.test.ts
// import mongoose from 'mongoose';

import User from "@/src/entities/User";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { ObjectId } from "mongodb";

// describe('Database Connection', () => {
//   it('should connect to the database', async () => {
//     const isConnected = mongoose.connection.readyState === 1;

//     expect(isConnected).toBe(true);
//   });
// });
const mongoUri = "mongodb://localhost:27017/clicncoordservices" ;
const dbName = 'clicncoordservices';
const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');

const newUser: User = {
    first_name: 'Adão',
    last_name: 'Lima',
    middle_name: 'Uami',
    email: 'jc.doe@example.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project: 'Example Project',
    role: 'Developer',
    access_level: 'Admin',
};
const newUser1: User = {
    first_name: 'Manuel',
    last_name: 'Lima',
    middle_name: 'mmM',
    email: 'manuel.doe@example.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project: 'Example Project',
    role: 'Developer',
    access_level: 'Admin',
};

describe('Integration Test - Database Connection', () => {

    beforeAll(async () => {
        await mongoAdapter.connect();
    })
    afterAll(async () => {
        await mongoAdapter.connect();
    })

    it('should connect and ADD user to the database', async () => {
        const result = await userRepository.createUser(newUser)
        expect(result).toStrictEqual(true);
    })
    
})

describe('Integration Test - Database Connection Delete User', () => {
    beforeAll(async () => {

        await mongoAdapter.connect();
    })
    it('should DELETE  user to the database', async () => {
        expect(await userRepository.deleteUser('manuel.doe@example.com')).toBe(true);   
    })
    afterAll(async () => {

        await mongoAdapter.connect();
    })
 
})
describe('Integration Test - Database Connection EDIT User', () => {
    beforeAll(async () => {

        await mongoAdapter.connect();
    })
    it('should EDIT  user to the database', async () => {
        const edited = await userRepository.updateUser(newUser1, 'jc.doe@example.com');
        expect(newUser1.email).toEqual((<User>edited).email); 
    })
    afterAll(async () => {

        await mongoAdapter.connect();
    })
})
describe('Integration Test - Database Connection GET User', () => {
    beforeAll(async () => {

        await mongoAdapter.connect();
    })
    it('should GET  user to the database', async () => {
        const user1 = await userRepository.getUserById('mauro.doe@example.com');
        const user2 = await userRepository.getUserById('mauro.doe@example.com');
        expect(user1).toStrictEqual(user2); 
    })
    afterAll(async () => {

        await mongoAdapter.connect();
    })
})
describe('Integration Test - Database Connection GET ALL  User', () => {
    beforeAll(async () => {

        await mongoAdapter.connect();
    })
    it('should GET ALL   users to the database', async () => {
        expect(await userRepository.getAllUsers()).toBeTruthy();   

        await mongoAdapter.close()
    })
    afterAll(async () => {

        await mongoAdapter.connect();
    })
})