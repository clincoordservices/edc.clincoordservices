import User from "@/src/entities/User";

export default interface UserRepository {
	getUserById(userEmail: string): Promise<User | {}>;
	getAllUsers(): Promise<User[]>;
	createUser(user: User): Promise<Boolean>;
	updateUser(user: User, userEmail: string): Promise<User| {}>;
	deleteUser(userEmail: string): Promise<boolean>; 
}