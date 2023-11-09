import User from "@/src/entities/User";

export default interface UserRepository {
	get(userEmail: string): Promise<User>;
	create(user: User): Promise<void>;
	edit(user: User, userEmail: string): Promise<User | null>;
	delete(userEmail: string): Promise<boolean>; 
	list(): Promise<User[]>;
}