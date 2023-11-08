import IUser from "@/src/domain/models/User";

class UserRepositoryMemory {

    private users: IUser[];

    constructor() {
      this.users = [];
    }
  
    async createUser(user: IUser): Promise<IUser> {
      this.users.push(user);
      return user;
    }
  
    async findUserByMail(userEmail: string): Promise<IUser | undefined> {
      const user = this.users.find((u) => u.email === userEmail);
      return user;
    }
  
    async findUserByEmail(email: string): Promise<IUser | undefined> {
      const user = this.users.find((u) => u.email === email);
      return user;
    }
  
    async updateUser(userEmail: string, user: IUser): Promise<IUser | null> {
      const index = this.users.findIndex((u) => u.email === userEmail);
      if (index > -1) {
        this.users[index] = user;
        return user;
      } else {
        return null;
      }
    }
  
    async deleteUserById(userEmail: string): Promise<boolean> {
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