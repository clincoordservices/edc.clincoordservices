import IUser from "@/src/domain/models/User";
import UserRepository from "@/src/domain/repository/userRepository";
import User from "@/src/entities/User";

class UserRepositoryMemory implements UserRepository {

    private users: IUser[];

    constructor() {
      this.users = [];
    }
  async getUserById(userId: string): Promise<User> {
    const user =  this.users.find((u) => u.email === userId) as IUser;
    return  user || undefined
  }
  async getUserByEmail(userEmail: string): Promise<{} | User> {
    const user = this.users.find((u) => u.email === userEmail) as User;
    return user;
  }
  getAllUsers(): Promise<User[]> {
    throw new Error("Method not implemented.");
  }
  async createUser(user: User): Promise<Boolean> {
     const res = this.users.push(user);
     if(res) return true

     return false
  }
  async updateUser(user: User, userEmail: string): Promise<{} | User> {
    const index = this.users.findIndex((u) => u.email === userEmail);
    if (index > -1) {
      this.users[index] = user;
      return user;
    } else {
      return {};
    }
  }
  async deleteUser(userEmail: string): Promise<boolean> {
    const index = this.users.findIndex((u) => u.email === userEmail);
    if (index > -1) {
      this.users.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

}
export default UserRepositoryMemory;