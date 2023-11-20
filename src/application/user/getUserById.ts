import User from "@/src/entities/User";
import UserRepository from "../../domain/repository/userRepository";

export default class GetById {
    constructor(private userRepository: UserRepository){}
        async perform(id: string):Promise<User | {}> {
            const res = await this.userRepository.getUserById(id);
            return res;
        }
}