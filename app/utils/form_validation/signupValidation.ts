import User from "@/app/dashboard/user/users/page";
import { string, object } from "zod";

export type SignupData = {
    first_name: string,
    last_name: string,
    email: string,
    company: string,
    password: string,
    role: string
}
export const SignupSchema = object({
    first_name: string().min(2, "Please enter First-name").max(255, "Please enter First-name"),
    last_name:  string().min(2, "Please enter Last Name").max(255,"Please enter Last Name"),
    email: string().email("Please enter a e-mail").max(255, "Please enter a e-mail"),
    company: string().min(2, "Please enter the Company").max(255, "Please enter the Company"),
    password: string().min(6, "Please enter a Password").max(255, "Please enter a Password"),
});
export const safeParseFunctionSignup = function (signupData: SignupData){
    const result = SignupSchema.safeParse(signupData);
    if(!result.success){
        const {first_name, last_name, company, email, password} = result.error.format();
        return {first_name, last_name, company, email, password};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionSignup;