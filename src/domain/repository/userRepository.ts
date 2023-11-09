import User from "@/src/entities/User";

export default interface UserRepository {
	get(idItem: string): Promise<User>;
	create(item: User): Promise<void>;
	edit(item: User, userEmail: string): Promise<User | null>;
	delete(userEmail: string): Promise<boolean>; 
	list(): Promise<User[]>;
}