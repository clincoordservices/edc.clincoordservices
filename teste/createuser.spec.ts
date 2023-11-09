// UserRepositoryMemory

import CreateUser from "@/src/application/createUser";
import User from "@/src/entities/User";
import UserRepositoryMemory from "@/src/infrastructure/repository/memory/userRepositoryMemory";

const userRepo = new  UserRepositoryMemory();

const usercreate = new CreateUser(userRepo);

// 

test('should return a user',async  () => {
    const user = new User("Rodrigo","Lima","Caiala","lniochy@gmail.com", "CCS", "123456",  "Healthy", "Systems",  "Sdev" );
    const user_  = await usercreate.perform(
        user
    );

    const result = await userRepo.findUserByEmail("lniochy@gmail.com");

    expect(result?.email).toBe(user.email);

  });