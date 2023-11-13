import IUser from "@/src/domain/models/User";
import UserRepository from "@/src/domain/repository/userRepository";
import User from "@/src/entities/User";

class UserRepositoryMemory implements UserRepository {

    private users: IUser[];

    constructor() {
      this.users = [];
    }
  get(idItem: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async create(item: User): Promise<void> {
    this.users.push(item);
  }
  async edit(item: User, userEmail: string): Promise<User | null> {
    const index = this.users.findIndex((u) => u.email === userEmail);
    if (index > -1) {
      this.users[index] = item;
      return item;
    } else {
      return null;
    }
  }
  async delete(userEmail: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.email === userEmail);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  async list(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
    async findUserByMail(userEmail: string): Promise<IUser | undefined> {
      const user = this.users.find((u) => u.email === userEmail);
      return user;
    }
  
    async findUserByEmail(email: string): Promise<IUser | undefined> {
      const user = this.users.find((u) => u.email === email);
      return user;
    }
  
    // async updateUser(userEmail: string, user: IUser): Promise<IUser | {null}> {

    // }

}
export default UserRepositoryMemory;