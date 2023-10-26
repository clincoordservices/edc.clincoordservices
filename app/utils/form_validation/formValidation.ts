import { string, object } from "zod";

export type ContactUsData = {
    first_name: string,
    last_name: string,
    subject: string,
    message: string,
    email: string   
}
const ContactUsSchema = object({
    first_name: string().min(2).max(30),
    last_name:  string().min(2).max(30),
    subject: string().min(2).max(255),
    message: string().min(6).max(1000),
    email: string().email().min(6).max(255),
});
export const safeParseFunctionContactUs = function (contactUsData: ContactUsData){
    const result = ContactUsSchema.safeParse(contactUsData);

    if(!result.success){
        const {first_name, last_name, message, subject,email} = result.error.format();
        return {first_name, last_name, message, subject, email};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionContactUs;