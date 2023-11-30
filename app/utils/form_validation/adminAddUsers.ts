
import { string, object, array } from "zod";

export type IUserData = {
    first_name: string,
    last_name: string,
    middle_name: string
    password:string
    email:string,
    institution: string,
    role: string,
    project:string,
    access_level: string,
    company: string,
}
export const IUserSchema = object({
    first_name: string().min(2, "Please enter First-name").max(255),
    last_name:  string().min(2, "Please enter Last Name").max(255,"Please enter Last Name"),
    middle_name:  string().max(255,"Please enter Middle Name"),
    email: string().email("Please enter a e-mail").max(255, "Please enter a e-mail"),
    password: string().min(6, "Please enter a Password").max(255, "Please enter a Password"),
    role: string().min(5, "Please enter a Password").max(255, "Please enter a Role"),
    project: string().min(5, "Please enter a Password").max(255, "Please enter the project"),
    access_level: string().min(5, "Please enter Acess Level").max(255, "Please enter the Acess Level"),
    institution: string().min(5, "Please enter Acess Level").max(255, "Please enter the Acess Level"),
    company: string().min(5, "Please enter Acess Level").max(255, "Please enter the Acess Level"),
});
export const safeParseFunctionSignup = function (signupData: IUserData){
    const result = IUserSchema.safeParse(signupData);
    if(!result.success){
        const {first_name, last_name, middle_name, password, institution, role, project, access_level} = result.error.format();
        return {first_name, last_name, middle_name, password, institution, role, project, access_level};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionSignup;