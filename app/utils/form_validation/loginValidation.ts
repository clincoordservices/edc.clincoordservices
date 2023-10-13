import { z } from "zod";

type LoginData = {
    email_username: string,
    password: string
}
const LoginSchema = z.object({
    email_username: z.string().min(6).or(z.string().email()),
    password: z.string().min(6).max(18),
});



export const safeParseFunction = function (LoginData: LoginData){
    const result = LoginSchema.safeParse(LoginData);
    if(!result.success){
        console.log(result)
        const [password, email_username] = result.error.issues.map((obj)=> obj.path);

        return {password, email_username};
    } else {
             const {data} = result;
             return data;
    }
}
export default LoginSchema;