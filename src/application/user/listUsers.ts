import User from "@/src/entities/User";
import UserRepository from "../../domain/repository/userRepository";

export default class ListUser {

    constructor(private userRepository: UserRepository){ }

    async perform():Promise<User[]> {
        const res = await this.userRepository.getAllUsers();
        return res;
    }
}