import IUser from "../domain/models/User";
import UserRepository from "../domain/repository/userRepository";
import User from "../entities/User";

export default class CreateUser {

    constructor(private userRepository: UserRepository) { }

    async perform({ first_name,last_name, middle_name, email,company, password,institution,project,role}: IUser) {
        const user = new User(first_name,last_name, middle_name, email,company, password,institution,project,role);
        const res = await this.userRepository.create(user);
        return res;
    }
}