import { object, string } from "zod";

export type TLoginData = {
    email: string,
    password: string
}
export const LoginSchema = object({
    email: string().email("Please enter a user e-mail").min(6).max(255),
    password: string().min(5, "Please enter a password").max(255, "Please enter a password"),
});
export const safeParseFunctionLogin = function (loginData: TLoginData){
    const result = LoginSchema.safeParse(loginData);
    if(!result.success){
        const {password, email} = result.error.format();
        return {password, email};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionLogin;