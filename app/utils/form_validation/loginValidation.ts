import { z } from "zod";

type LoginData = {
    email_username: string,
    password: string
}
const LoginSchema = z.object({
    email_username: z.string().min(6).or(z.string().email()),
    password: z.string().min(6).max(18),
});

export const safeParseFunction = function (loginData: LoginData){
    const result = LoginSchema.safeParse(loginData);
    if(!result.success){
        const {password, email_username} = result.error.format();
        return {password, email_username};
    } else {
             const {data} = result;
             return data;
    }
}

export const verifyDataValue = function(data: any){
    return (data === undefined);
}
export const verifyDataType = function(data: any){
    return (typeof data === "string");
}
export default LoginSchema;