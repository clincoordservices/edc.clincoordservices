// import { cookies } from 'next/headers';
// import UserRepository from "@/src/domain/repository/userRepository";
// import User from "@/src/entities/User";
// import { comparePassword, hashPassword } from "@/src/utils/hashPassword";
// import { generateJWT } from "@/src/utils/jwt/generateJWT";

// export class AuthUserService {
//   constructor(readonly userRepository: UserRepository, ){}

//   async signup(user: User): Promise<boolean | null> {
//     const {email: userByEmail}  = user
   
//     const UserExist = await this.userRepository.getUserByEmail(userByEmail) as User;

//     if(!UserExist) {
//         return null;
//       } 

//     const hashedPassword = await hashPassword(user.password);
//     await this.userRepository.createUser({...user, password: hashedPassword});
//     return true;
//   }

//   async login(email: string, password: string): Promise< string  | null> {
//     const user = await this.userRepository.getUserByEmail(email);

//     if (Object.keys(user).length === 0) {
//       return null;
//     }
//     const user_ = user as User
//     const passwordMatches =  comparePassword(password, user_.password);
//     if (!passwordMatches) {
//       return null;
//     }

//     const token = generateJWT(user_);
//     const DAYS_IN_A_WEEK = 7;
//     const HOURS_IN_A_DAY = 24;
//     const A_SECONDS = 60;
//     const A_MINUTE = 60;
//     const A_MILLISIME = 1000;
//     const EXPIRE_IN_A_WEEK = (HOURS_IN_A_DAY * A_MINUTE * A_SECONDS * A_MILLISIME ) * DAYS_IN_A_WEEK;
//     cookies().set(
//       "auth_token", 
//       token, 
//       { 
//         expires: Date.now() - EXPIRE_IN_A_WEEK,
//         httpOnly: true,
//         path: '/', 
//       });
//     return token;
//   }
// }