import UserRepository from "@/src/domain/repository/userRepository";
import User from "@/src/entities/User";
import Connection from "../../database/connection";

export default class UserRepositoryDatabase implements UserRepository {

    constructor (readonly connection: Connection, readonly collection: string) {
	}

    async get(userEmail: string): Promise<User> {
       const user =  await this.connection.query(this.collection,{ findOne: { email: userEmail } });
        return user;
    }
    async create(user: User): Promise<void> {
        await this.connection.query(this.collection,{ insertOne: user });
    }
    async edit(user: User, userEmail: string): Promise<User | null> {
        const user_ = await this.connection.query(this.collection,{ updateOne: { email: userEmail }, $set: user });

        if(user_)
            return user_;

            return null;
    }
    async delete(userEmail: string): Promise<boolean> {
        const isDeleted = await this.connection.query(this.collection, { deleteOne: { email: userEmail} });
        return isDeleted
    }
    async list(): Promise<User[]> {
        const users = await this.connection.query(this.collection, { find: {} });
        return users;
    } 


}