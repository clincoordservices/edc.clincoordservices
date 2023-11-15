import IUser from "../../domain/models/User";
import UserRepository from "../../domain/repository/userRepository";
import User from "../../entities/User";

export default class CreateUser {

    constructor(private userRepository: UserRepository) { }

    async perform({first_name,last_name, middle_name, email,company, password,institution,project,role, access_level}: IUser) {
        let id = ""
        const user = new User(id, first_name,last_name, middle_name, email,company, password,institution,project,role, access_level);
        const res = await this.userRepository.createUser(user);
        return res;
    }
}