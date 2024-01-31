/* "use strict";
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

export default async function welcomeHomeOfficeVagas(registeredEmail) {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        tls: {
            rejectUnauthorized: false,
        },
        auth: {
            user: process.env.USER,
            pass: process.env.PASS,
        },
    });

    const configEmail = {
        from: "Boas Vindas a Home Office Vagas",
        to: "kelvimarthur@gmail.com",
        subject: "Site Home Office Vagas",
        text: "Mensagem do site Home Office Vagas",
        html: `
                <h1>Seja bem vindo a nossa NewsLetter</h1>
                <h2>O email compartilhado com a HOV, não é compartilhado com nenhum terceiro, fique tranquilo.</h2>
                
                <h2>A partir de agora toda segunda-feira iremos te mandar vagas. Torcemos por voce! Boa sorte!.</h2>
                <h4>Por HOV - Empregos Online | 61 9 8243-4868</h4>
        `
    };
    try {
        const enviarEmail = await transporter.sendMail(configEmail)

        if (enviarEmail.includes("250 2.0.0 OK")) {
            console.log("NODEMAILER - A mensagem foi entregue com sucesso!");
            return true
        } else {
            console.log("NODEMAILER - Houve um problema ao enviar a mensagem.");
            return false
        }
    } catch (error) {
        console.error("NODEMAILER - Erro ao enviar email:", error)
        return false
    }
} */