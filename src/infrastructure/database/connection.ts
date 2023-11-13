import { Collection } from "mongodb";

export default interface Connection {
	connect (statement: string, params: any): Promise<any>;
  	getModel(modelName: string):  Promise<Collection>;
	close (): Promise<void>;
}