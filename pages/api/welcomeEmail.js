/* import enviarMensagem from "@/utils/nodeMailer"

export default async function welcomeEmail(req, res){
    if (req.method === "POST") {
      const { email } = req.body;
      try {
        const resposta = await enviarMensagem(email)
        res.status(200).json({ resposta: "Email enviado! - 089645", message: resposta})
      } catch (error) {
        res.status(500).json({ resposta: "Sem sucesso - 565968", message: resposta})
      }
    }else{
      res.status(405).json({error:"Requisição não é POST - 546982"})
    }
} */