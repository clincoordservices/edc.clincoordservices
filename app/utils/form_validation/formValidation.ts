import { string, object } from "zod";

export type ContactUsData = {
    first_name: string,
    last_name: string,
    subject: string,
    message: string   
}
const ContactUsSchema = object({
    first_name: string().min(2).max(10),
    last_name:  string().min(2).max(10),
    subject: string().min(2).max(100),
    message: string().max(500)
});
export const safeParseFunctionContactUs = function (contactUsData: ContactUsData){
    const result = ContactUsSchema.safeParse(contactUsData);
    if(!result.success){
        const {first_name, last_name, message, subject} = result.error.format();
        return {first_name, last_name, message, subject};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionContactUs;