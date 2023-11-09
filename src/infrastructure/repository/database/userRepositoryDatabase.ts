import UserRepository from "@/src/domain/repository/userRepository";
import User from "@/src/entities/User";
import Connection from "../../database/connection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (readonly connection: Connection) {
	}

    get(userEmail: string): Promise<User> {
        
        return User;
    }
    create(user: User): Promise<void> {
        throw new Error("Method not implemented.");
    }
    edit(user: User, userEmail: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    delete(userEmail: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    list(): Promise<User[]> {
        throw new Error("Method not implemented.");
    } 


}