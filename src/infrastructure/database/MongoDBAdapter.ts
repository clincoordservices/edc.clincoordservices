import { MongoClient } from 'mongodb';
import Connection from './connection';

export default class MongoDBConnection implements Connection {
 private client: MongoClient;

    // Connctar a DATABASE 
 constructor(private uri: string) {
   this.client = new MongoClient(uri);
 }

 async query(statement: string, params: any): Promise<any> {
   await this.client.connect();
   const db = this.client.db();
   const result = await db.collection(statement).find(params).toArray();
   await this.client.close();
   return result;
 }

 async close(): Promise<void> {
   await this.client.close();
 }
}
