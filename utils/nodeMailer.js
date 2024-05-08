import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function sendMessageHov(name, email, tellPhone, message){
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GOOGLE_USER,
      pass: process.env.GOOGLE_PASS,
    },tls: {
      rejectUnauthorized: false // não verificar o certificado
  }
  });

  const mailOptions = {
    from: '"Contato Site HOV" <homeofficevagas77@gmail.com>',
    to: "homeofficevagas77@gmail.com",
    subject: "Site Home Office Vagas",
    text: "Mensagem do Home Office Vagas",
    html: `
        <h1>Mensagem do Site - HOV</h1>
        <h2>Os dados abaixo são de clientes, não compartilhe e nem use para fins mal intencionados.</h2>
        <p>Nome do Cliente: ${name}</p>
        <p>Email: ${email}</p>
        <p>Telefone: ${tellPhone}</p>
        <p>Mensagem: ${message}</p>
        <h3>Obrigado por usar o nosso site.</h3>
      `,
  }

  const sendEmail = await transporter.sendMail(mailOptions)
  
  try {  
    if(sendEmail.response.includes("250 2.0.0 OK")){
      console.log("deu certo",sendEmail)
    }
  } catch (error) {
    console.log("deu errado", sendEmail)
  }
  
}
