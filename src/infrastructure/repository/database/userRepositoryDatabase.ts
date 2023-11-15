import UserRepository from "@/src/domain/repository/userRepository";
import User from "@/src/entities/User";
import Connection from "../../database/connection";
export default class UserRepositoryDatabase implements UserRepository {
  
    constructor(private connection: Connection, readonly collectionName: string) {}
      async getUserByEmail(userEmail: string): Promise<{} | User> {
        try {
          const usersCollection = await this.connection.getModel(this.collectionName);
          const user = await usersCollection.findOne({ email: userEmail });
          return user || {};
        } catch (error) {
          throw new Error(`Error fetching user by id: `);
        }
      }
    
      async getAllUsers(): Promise<User[]> {
        try {
          const usersCollection =  await this.connection.getModel(this.collectionName);
          const users:any = await usersCollection.find().toArray();
          return users;
        } catch (error) {
          throw new Error(`Error fetching all users: `);
        }
      }
    
      async createUser(user: User): Promise<boolean> {
        try {
          const usersCollection = await this.connection.getModel(this.collectionName);
          const user_ = await usersCollection.insertOne(user);

          if(user_) return true; 
          return false;
        } catch (error) {
          throw new Error(`Error creating user:`);
        }
      }
    
      async updateUser(user: User, userEmail: string): Promise<{} | User> {
        try {
          const usersCollection = await this.connection.getModel(this.collectionName);
          const result = await usersCollection.findOneAndUpdate(
            { email: userEmail },
            { $set: user },
            { returnDocument: 'after' }
          );
           if(result)
            return result.value;
            return {}
        } catch (error) {
          throw new Error(`Error updating user: `);
        }
      }
    
      async deleteUser(userEmail: string): Promise<boolean> {
        try {
          const usersCollection = await this.connection.getModel(this.collectionName);
          const result = await usersCollection.deleteOne({ email: userEmail });
          return result.deletedCount === 1;
        } catch (error) {
          throw new Error(`Error deleting user`);
        }
      }
    }