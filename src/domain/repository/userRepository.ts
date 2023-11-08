import User from "@/src/entities/User";

export default interface UserRepository {
	get(idItem: string): Promise<User>;
	create(item: User): Promise<void>;
	edit(item: User): Promise<void>;
	delete(item: User): Promise<void>; 
	list(): Promise<User[]>;
}