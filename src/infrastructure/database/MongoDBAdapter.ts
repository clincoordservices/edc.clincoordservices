import connectToDatabase from './dbConnect';
import Connection from './connection';

export default class MongoDBConnection implements Connection {
 async query(statement: string, params: any): Promise<any> {
   const client = await connectToDatabase();
   const db = client.db();
   const collection = db.collection(statement);
   return collection.find(params).toArray();
 }

 async close(): Promise<void> {
   const client = await connectToDatabase();
   await client.close();
 }
}

