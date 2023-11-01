
import { string, object } from "zod";

export interface IUserData  {
    first_name: string,
    last_name: string,
    middle_name: string
    temp_pswd:string
    user_email:string
    user_institute: string
    user_role:string
}

export const IUserSchema = object({
    first_name: string().min(2, "Please enter First-name").max(255),
    last_name:  string().min(2, "Please enter Last Name").max(255,"Please enter Last Name"),
    middle_name:  string().min(2, "Please enter Last Name").max(255,"Please enter Last Name"),
    user_email: string().email("Please enter a e-mail").max(255, "Please enter a e-mail"),
    temp_pswd: string().min(6, "Please enter a Password").max(255, "Please enter a Password"),
    user_institute: string().min(2, "Please enter a Password").max(255, "Please enter a Institute"),
    user_role: string().min(5, "Please enter a Password").max(255, "Please enter a Institute"),
});
export const safeParseFunctionSignup = function (signupData: IUserData){
    const result = IUserSchema.safeParse(signupData);
    if(!result.success){
        const {first_name, last_name, middle_name, temp_pswd, user_institute, user_role} = result.error.format();
        return {first_name, last_name, middle_name, temp_pswd, user_institute, user_role};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionSignup;