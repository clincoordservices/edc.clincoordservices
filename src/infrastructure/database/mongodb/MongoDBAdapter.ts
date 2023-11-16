import { MongoClient, Db, Collection } from 'mongodb';
import Connection from '@/src/infrastructure/database/connection';

export default class MongoDBAdapter implements Connection {
  private client: MongoClient;
  private db!: Db;

  constructor(private uri: string, private dbName: string) {
    this.client = new MongoClient(uri);
    this.dbName = dbName;
  }
  async connect(): Promise<void> {
    await this.client.connect();
    this.db = this.client.db(this.dbName);
  }
  async getModel(modelName: string): Promise<Collection> {
    return this.db.collection(modelName);
  }
  async close(): Promise<void> {
    await this.client.close();
  }
}
