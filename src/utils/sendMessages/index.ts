import nodemailer from 'nodemailer';

export async function sendEmail(
  to: string | string[],
  subject: string,
  text: string,
  html: string,
): Promise<Boolean> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASSWORD,
    },
  });

  const message = {
    from: "no-reply@clincoordservices.org",
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(message);
     Promise.resolve();
     return true;
  } catch (error) {
    console.error('Error sending email:', error);
  }
  return  false;
}