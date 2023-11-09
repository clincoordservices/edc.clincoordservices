import User from "@/src/entities/User";
import UserRepository from "../../domain/repository/userRepository";

export default class GetUser {

    constructor(private userRepository: UserRepository){ }

    async perform(userEmail: string):Promise<User> {
        const res = await this.userRepository.get(userEmail);
        return res;
    }
}