// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const dataCards = [
    {
      id: 0,  
      tituloDaVaga: "Secretariado com APX",
      formaDeRemuneracao: "A combinar",
      descricaoDoBanner: "A vaga de desenvolvedor front-end na nossa empresa é focada em fazer a interface gráfica dos nossos aplicativos, aqui voce conta com uma equipe que te ajuda em todos os quesitos",
      requisitos: "Ter pelo menos 3 anos de experiencia na area.",
      descricaoDaVaga: "Estamos precisando de um profissional da área que saiba mexer com Figma, CorelDraw, InDesign e Canva. O trabalho é somente para pessoas com EXPERIÊNCIA.",
      escolaridadeMinima: "Ter pelo menos 3 anos de experiencia na area.",
      cursoSuperior: "Necessario ter ao menos um curso superior na area de tecnologia, seja formado em Engenharia de Software, Segurança da Informação etc.",
      jornadaDeTrabalho: "A jornada de trabalho consiste em 8 horas de trabalho",
      beneficios: "Gympass, seguro de vida e odontologico",
      tags: {
        habilidades: ["Figma", "CorelDraw", "InDesign", "Canva"],
        experiencia: true,
        nivel: "Sênior"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "08:00/18:00",
      horarioDeCriacao: "12:30"
    },
    {
      id: 1,
      tituloDaVaga: "Analista de Marketing Digital",
      formaDeRemuneracao: "Salário fixo + bônus por desempenho",
      descricaoDoBanner: "Estamos em busca de um profissional de marketing digital apaixonado por estratégias inovadoras. Se você gosta de desafios e quer fazer parte de uma equipe dinâmica, essa vaga é para você!",
      requisitos: "Experiência comprovada em marketing digital, conhecimento em SEO, SEM, e familiaridade com ferramentas como Google Analytics e Facebook Ads.",
      descricaoDaVaga: "O analista de marketing digital será responsável por desenvolver e implementar estratégias de marketing online, monitorar o desempenho das campanhas e analisar métricas para otimização contínua.",
      escolaridadeMinima: "Ensino superior completo em Marketing, Publicidade ou áreas relacionadas.",
      cursoSuperior: "Desejável formação em Marketing, Publicidade ou áreas afins.",
      jornadaDeTrabalho: "Horário flexível",
      beneficios: "Plano de saúde, vale-refeição, home office opcional",
      tags: {
        habilidades: ["SEO", "SEM", "Google Analytics", "Facebook Ads"],
        experiencia: true,
        nivel: "Pleno"
      },
      horas: "30 horas/semana",
      horarioDoTrabalho: "Flexível",
      horarioDeCriacao: "09:00"
    },
    {
      id: 2,
      tituloDaVaga: "Engenheiro de Software Backend",
      formaDeRemuneracao: "Salário competitivo",
      descricaoDoBanner: "Estamos expandindo nossa equipe de desenvolvimento e buscamos um engenheiro de software backend talentoso e motivado. Se você é apaixonado por desenvolvimento de software e busca desafios inovadores, essa é a oportunidade certa para você!",
      requisitos: "Experiência sólida em desenvolvimento backend, conhecimento em linguagens como Node.js e Python, e familiaridade com bancos de dados SQL e NoSQL.",
      descricaoDaVaga: "O engenheiro de software backend será responsável por desenvolver e manter a arquitetura backend de nossos sistemas, garantindo a eficiência e escalabilidade.",
      escolaridadeMinima: "Ensino superior completo em Engenharia de Software, Ciência da Computação ou áreas relacionadas.",
      cursoSuperior: "Pós-graduação em Engenharia de Software será considerada um diferencial.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Plano de saúde, vale-transporte, ambiente de trabalho colaborativo",
      tags: {
        habilidades: ["Node.js", "Python"],
        experiencia: true,
        nivel: "Sênior"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "09:00/18:00",
      horarioDeCriacao: "10:00"
    }
  ];

  if(req.method === "GET"){
    setTimeout(() => {
      res.status(200).json({dataCards})
    }, 3000)
  }else{
    res.status(500).json({ mensagem: "Algo incorreto aconteceu" })
  }
}
