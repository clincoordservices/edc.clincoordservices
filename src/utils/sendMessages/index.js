const nodemailer = require('nodemailer');

// type TNodeMail = {
//     email: string, 
//     subject: string, 
//     message: string
// }

const sendEmail = async (email, subject, message) => {
  
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth: {
      user: "rodrigo.lima.ccs@gmail.com",
      pass: "2023ClinCoord",
    },
  });

  // Cria o objeto de mensagem
  const mail = {
    from: {
      email: "rodrigo.lima.ccs@gmail.com",
      name: 'Meu nome',
    },
    to: {
      email,
      name: 'Nome do destinatário',
    },
    subject,
    text: message,
  };

 
   transporter.sendMail(mail);


  transporter.close();
};


(async()=>{
  await sendEmail("lniochy@gmail.com", "Test", "Test");
})();