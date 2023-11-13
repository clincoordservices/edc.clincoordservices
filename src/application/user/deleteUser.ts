import UserRepository from "../../domain/repository/userRepository";

export default class DeleteUser {

    constructor(private userRepository: UserRepository) { }

    async perform(userEmail: string) {
        const res = await this.userRepository.deleteUser(userEmail);
        return res;
    }
}