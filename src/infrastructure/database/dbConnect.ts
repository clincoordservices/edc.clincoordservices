import { MongoClient } from 'mongodb';

const uri  = process.env.MONGODB_URI as string;

let client: any;
let clientPromise = new MongoClient(uri).connect();

export default async function connectToDatabase() {
 if (!client) {
   client = await clientPromise;
 }
 return client;
}
