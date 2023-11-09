import User from "@/src/entities/User";
import UserRepository from "../../domain/repository/userRepository";

export default class EditUser {

    constructor(private userRepository: UserRepository){ }

    async perform(user: User, userEmail: string):Promise<User | null> {
        const res = await this.userRepository.edit(user, userEmail);
        
        if(res)
        return res;
    
        return null;
    }
}