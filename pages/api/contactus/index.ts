import { sendEmail } from "@/src/utils/sendMessages";
import { NextApiRequest, NextApiResponse } from "next";

export default async function POST(req: NextApiRequest,res: NextApiResponse) {
    const method = req.method;
    const {first_name, last_name, message, email_, subject} = req.body

   try {
          if(first_name && method === 'POST'){
            const to = process.env.NEXT_PUBLIC_MAIL_USER as string;
            const text = 'Hello';
            const html = `
            <h3><strong>**Assunto:**</strong></h3> ${subject}</br></br>
            <h3><strong>**Nome:**</strong></h3> ${first_name} ${last_name}</br></br>
            <h3><strong>**E-mail:**</strong></h3> ${email_}</br></br>
            <h3><strong>**Mensagem:**</strong></h3></br>
            <p>${message}</p>`;
                   
            await sendEmail(to, subject, text, html);
            return res.json({res_: req.body});
          }
        }catch(err){
            throw new Error("Intern Error. Report it.");
   }
}