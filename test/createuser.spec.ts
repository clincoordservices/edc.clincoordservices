
// import User from "@/src/entities/User";
// import MongooseUserRepository from "@/src/infrastructure/database/MongoDBAdapter";
// import MongooseConnect from "@/src/infrastructure/database/mongooseconnection";

// const uri: string = "mongodb://localhost:27017/clicncoordservices" 

// const dbConncet = new UserDataAdapter()
// const repo = new UserRepositoryDatabase(dbConncet, "users");


// // // test('should return a user',async  () => {
// // //     const user = new User("Rodrigo","Lima","Caiala","lniochy@gmail.com", "CCS", "123456",  "Healthy", "Systems",  "Sdev" );
// // //     await usercreate.perform(
// // //         user
// // //     );

// // //     const result = await userRepo.findUserByEmail("lniochy@gmail.com");
// // //     expect(result?.email).toBe(user.email);


// // //     expect(userRepo.get(user.email)).toBe(user);

// // //   });
// const mongoConnectionString = "mongodb://localhost:27017/clicncoordservices";
// const mongooseConnection = new MongooseConnect(mongoConnectionString);

// // Repositório e UseCase usando o Mongoose
// const userRepository = new MongooseUserRepository(mongooseConnection);
// const userUseCase = new UserUseCase(userRepository);

// describe('Database Connection', () => {
//   test("Deve buscar os itens", async function () {
//     const user = new User("Rodrigo","Lima","Caiala","lniochy@gmail.com", "CCS", "123456",  "Healthy", "Systems",  "Sdev", "" );
//     // await repo.create(user);


//     // Dados do usuário para criar
//     const newUser: User = {
//       first_name: 'John',
//       last_name: 'Doe',
//       middle_name: 'M',
//       email: 'john.doe@example.com',
//       company: 'Example Inc',
//       password: 'secretpassword',
//       institution: 'Example University',
//       project: 'Example Project',
//       role: 'Developer',
//       access_level: 'Admin',
//     };


//     // const old = await userUseCase.createUser(user);
//     expect(userUseCase.createUser(user)).toBe(user)
//   })
// });