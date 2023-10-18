import { string, object } from "zod";

export type SignupData = {
    first_name: string,
    last_name: string,
    email: string,
    company: string,
    password: string
}

const SignupSchema = object({
    first_name: string().min(2).max(10),
    last_name:  string().min(2).max(10),
    email: string().email().max(60),
    company: string().min(2).max(15),
    password: string().min(6).max(10),
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