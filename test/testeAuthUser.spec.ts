// import User from "@/src/entities/User";
// import MongoDBAdapter from "@/src/infrastructure/database/mongodb/MongoDBAdapter";
// import UserRepositoryDatabase from "@/src/infrastructure/repository/database/userRepositoryDatabase";

// const mongoUri = "mongodb://localhost:27017/clicncoordservices" ;
// const dbName = 'clicncoordservices';
// const mongoAdapter = new MongoDBAdapter(mongoUri, dbName);
// const userRepository = new UserRepositoryDatabase(mongoAdapter, 'users');

// const newUser: User = {
//     id: "1",
//     first_name: 'Josué',
//     last_name: 'Martins',
//     middle_name: 'Borges',
//     email: 'eman.doe@example.com',
//     company: 'Example Inc',
//     password: 'secretpassword',
//     institution: 'Example University',
//     project: 'Example Project',
//     role: 'Developer',
//     access_level: 'Admin',
// };

// describe('Integration Test - Database Connection', () => {

//     beforeAll(async () => {
//         await mongoAdapter.connect();
//     })
//     afterAll(async () => {
//         await mongoAdapter.close();
//     })

//     it('should connect and ADD user to the database', async () => {
//         const createUser = new AuthUserService(userRepository);
//         const token =  await createUser.signup(newUser);
//         expect(token).toStrictEqual(true);
//     })
    
// })

// describe('Integration Test - Database Connection', () => {

//     beforeAll(async () => {
//         await mongoAdapter.connect();
//     })
//     afterAll(async () => {
//         await mongoAdapter.close();
//     })

//     it('should connect and ADD user to the database', async () => {
//         // const result = await userRepository.createUser(newUser)

//     })
    
// })