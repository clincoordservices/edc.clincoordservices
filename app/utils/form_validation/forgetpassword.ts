import { object, string } from "zod";

type ForgetPasswordData = {
    email: string
}
const ForgetPasswordSchema = object({
    email: string().email().min(6).max(255),
});

export const safeParseFunctionForgetPassWord = function (forgetPasswordData: ForgetPasswordData){
    const result = ForgetPasswordSchema.safeParse(forgetPasswordData);
    if(!result.success){
        const {email} = result.error.format();
        return {email};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionForgetPassWord;