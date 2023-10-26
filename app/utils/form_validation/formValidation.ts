import { string, object, infer, TypeOf } from "zod";

export type ContactUsData = {
    first_name: string,
    last_name: string,
    subject: string,
    message: string,
    email_: string   
}
export const ContactUsSchema = object({
    first_name: string().min(2, "Please enter a First-name").max(60, "Please enter a First-name"),
    last_name:  string().min(2, "Please enter your Last Name" ).max(60,"Please enter your Last Name"  ),
    subject: string().min(2, "Please enter your Subject" ).max(255, "Please enter your Subject" ),
    message: string().min(6, "Please enter your Message").max(1000, "Please enter your Message"),
    email_: string().email().min(6, "Please enter your e-mail").max(255, "Please enter your e-mail"),
});

export const safeParseFunctionContactUs = function (contactUsData: ContactUsData){
    const result = ContactUsSchema.safeParse(contactUsData);

    if(!result.success){
        const {first_name, last_name, message, subject,email_} = result.error.format();
        return {first_name, last_name, message, subject, email_};
    } else {
             const {data} = result;
             return data;
    }
}
export default safeParseFunctionContactUs;