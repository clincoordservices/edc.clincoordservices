// __tests__/database.test.ts



import User from "@/src/entities/User";
import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";
import { ObjectId } from "mongodb";

// // describe('Database Connection', () => {
// //   it('should connect to the database', async () => {
// //     const isConnected = mongoose.connection.readyState === 1;

// //     expect(isConnected).toBe(true);
// //   });
// // });
const mongoUri = "mongodb+srv://rodrigo:d80z7Ws8dbp7XDpE@atlascluster.ng3rpy6.mongodb.net/cleancoordservices?retryWrites=true&w=majority";
const dbName = 'clicncoordservices';
const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');
import CreateUser from "@/src/application/user/createUser";
const createuser = new CreateUser(userRepository)

const newUser: User = {
    id: "1",
    first_name: 'Jonas',
    last_name: 'Segunda',
    middle_name: 'Adriano',
    email: 'ep.doe@example.com',
    company: 'Example Inc',
    password: 'secretpassword',
    institution: 'Example University',
    project: 'Example Project',
    role: 'Developer',
    access_level: 'Admin',
};
// const newUser1: User = {
//     id: "",
//     first_name: 'Manuel',
//     last_name: 'Lima',
//     middle_name: 'mmM',
//     email: 'manuel.doe@example.com',
//     company: 'Example Inc',
//     password: 'secretpassword',
//     institution: 'Example University',
//     project: 'Example Project',
//     role: 'Developer',
//     access_level: 'Admin',
// };

describe('Integration Test - Database Connection', () => {

    beforeAll(async () => {
        await mongoAdapter.connect();
    })
    afterAll(async () => {
        await mongoAdapter.close();
    })

    it('should connect and ADD user to the database', async () => {
        // const result = await userRepository.createUser(newUser)
        
        const isCreated =  await createuser.perform(newUser);
        expect(isCreated).toBe(true);
    })
    
})

// describe('Integration Test - Database Connection Delete User', () => {
//     beforeAll(async () => {

//         await mongoAdapter.connect();
//     })
//     it('should DELETE  user to the database', async () => {
//         expect(await userRepository.deleteUser('manuel.doe@example.com')).toBe(true);   
//     })
//     afterAll(async () => {

//         await mongoAdapter.connect();
//     })
 
// })
// describe('Integration Test - Database Connection EDIT User', () => {
//     beforeAll(async () => {

//         await mongoAdapter.connect();
//     })
//     it('should EDIT  user to the database', async () => {
//         const edited = await userRepository.updateUser(newUser1, 'jc.doe@example.com');
//         expect(newUser1.email).toEqual((<User>edited).email); 
//     })
//     afterAll(async () => {

//         await mongoAdapter.connect();
//     })
// })
describe('Integration Test - Database Connection GET User', () => {
    beforeAll(async () => {

        await mongoAdapter.connect();
    })
    it('should GET  user to the database', async () => {
        const user1 = await userRepository.getUserById('343568482');
        const user2 = await userRepository.getUserByEmail('jc.doe@example.com');
        expect(user1).toStrictEqual(user2); 
    })
    afterAll(async () => {

        await mongoAdapter.close()
    })
})
// describe('Integration Test - Database Connection GET ALL  User', () => {
//     beforeAll(async () => {

//         await mongoAdapter.connect();
//     })
//     it('should GET ALL   users to the database', async () => {
//         expect(await userRepository.getAllUsers()).toBeTruthy();   

       
//     })
//     afterAll(async () => {

//         await mongoAdapter.close()
//     })
// })