import { sendEmail } from "@/src/utils/sendMessages";

describe('Unit Test - Send Mensage From The System', () => {

    it('should Send Mensage From The System', async () => {
        const to = 'lniochy@gmail.com';
        const subject = 'CC Simplified IRT - password verification';
        const text = 'Hello world!';
        const html = `
        Hi [user name],<br><br>
        We received a request to verify your password in the CC Simplified IRT system.<br>
        If you did not request this verification, please ignore this message.<br><br>
        To verify your password, click the link below:<br>
        <a href='https://clincoordedc-cm6t.vercel.app/forgetpassword'>Request Password</a><br><br>
        If you are unable to click the link, copy and paste the address into the address bar of your browser.<br>
        After verifying your password, you will be redirected to the system login page.<br><br>
        Sincerely,<br>
        System team`;
        
        
         const res = await sendEmail(to, subject, text, html);
        expect(res).toBe(true);
    })  
})