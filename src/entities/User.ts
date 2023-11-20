import { ObjectId } from "mongodb";
import IUser from "../domain/models/User"

class User implements IUser {
    constructor( 
        public readonly id: string,
        public readonly first_name: string,
        public readonly middle_name: string, 
        public readonly last_name: string, 
        public readonly email: string,
        public readonly company: string,
        public readonly password: string,
        public readonly institution: string,
        public readonly project: string,
        public readonly role: string,
        public readonly access_level: string
        ){}
}
export default User;