// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const dataCards = [
    {
      id: 0,  
      tituloDaVaga: "Secretariado com APX",
      formaDeRemuneracao: "A combinar",
      salario: "Entre 1.000 e 2.000",
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
      horarioDeCriacao: "12:30",
      pais: "Brasil",
      cidade: "Salvador",
      email: "kelvimarthur@gmail.com"
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
      horarioDeCriacao: "09:00",
      pais: "Canadá",
      cidade: "Toronto"
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
      horarioDeCriacao: "10:00",
      pais: "França",
      cidade: "Paris"
    },
    {
      id: 3,
      tituloDaVaga: "Desenvolvedor Full Stack - Senior",
      formaDeRemuneracao: "A combinar",
      descricaoDoBanner: "Estamos em busca de um desenvolvedor full stack sênior para integrar nossa equipe. Se você é apaixonado por tecnologia e gosta de desafios, essa vaga é para você!",
      requisitos: "Experiência comprovada em projetos full stack, conhecimento em React, Node.js, MongoDB.",
      descricaoDaVaga: "O profissional será responsável pelo desenvolvimento e manutenção de sistemas web. Buscamos alguém proativo e comprometido com prazos.",
      escolaridadeMinima: "Ensino Superior completo na área de Tecnologia da Informação.",
      cursoSuperior: "Graduação em Ciência da Computação, Engenharia de Software ou áreas afins.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Plano de saúde, vale-refeição e participação nos lucros.",
      tags: {
        habilidades: ["React", "Node.js", "MongoDB"],
        experiencia: true,
        nivel: "Sênior"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "09:00/18:00",
      horarioDeCriacao: "09:30",
      pais: "Argentina",
      cidade: "Buenos Aires"
    },
    {
      id: 4,
      tituloDaVaga: "Analista de Marketing Digital",
      formaDeRemuneracao: "Salário fixo + bônus por desempenho",
      descricaoDoBanner: "Buscamos um profissional de marketing digital apaixonado por inovação e resultados. Se você é criativo e proativo, venha fazer parte da nossa equipe!",
      requisitos: "Experiência comprovada em marketing digital, conhecimento em SEO, SEM, Google Analytics.",
      descricaoDaVaga: "O analista será responsável por estratégias de marketing online, campanhas de mídia social e análise de métricas. Procuramos alguém antenado com as últimas tendências do mercado.",
      escolaridadeMinima: "Ensino Superior completo em Marketing, Publicidade ou áreas afins.",
      cursoSuperior: "Graduação em Marketing, Publicidade ou áreas correlatas.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Vale-transporte, plano de saúde e vale-alimentação.",
      tags: {
        habilidades: ["SEO", "SEM", "Google Analytics"],
        experiencia: true,
        nivel: "Pleno"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "09:00/18:00",
      horarioDeCriacao: "10:00",
      pais: "Brasil",
      cidade: "Pará"
    },
    {
      id: 5,
      tituloDaVaga: "Engenheiro de Software - Mobile",
      formaDeRemuneracao: "A combinar",
      descricaoDoBanner: "Estamos à procura de um engenheiro de software especializado em desenvolvimento mobile. Se você tem paixão por tecnologia e inovação, candidate-se!",
      requisitos: "Experiência sólida em desenvolvimento mobile, conhecimento em Flutter, React Native.",
      descricaoDaVaga: "O profissional será responsável pelo desenvolvimento de aplicativos móveis. Buscamos alguém com habilidades analíticas e orientação para resultados.",
      escolaridadeMinima: "Ensino Superior completo na área de Tecnologia da Informação.",
      cursoSuperior: "Graduação em Engenharia de Software, Ciência da Computação ou áreas relacionadas.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Plano de saúde, vale-refeição e participação nos lucros.",
      tags: {
        habilidades: ["Flutter", "React Native"],
        experiencia: true,
        nivel: "Pleno"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "08:30/17:30",
      horarioDeCriacao: "11:00",
      pais: "Africa do Sul",
      cidade: "Johannesburgo"
    },
    {
      id: 6,
      tituloDaVaga: "Analista de Recursos Humanos",
      formaDeRemuneracao: "Salário fixo",
      descricaoDoBanner: "Procuramos um profissional de RH comprometido e dinâmico. Se você gosta de lidar com pessoas e busca constantemente a excelência, essa vaga é para você!",
      requisitos: "Experiência em processos de recrutamento e seleção, conhecimento em legislação trabalhista.",
      descricaoDaVaga: "O analista será responsável por processos seletivos, integração de novos colaboradores e gestão de benefícios. Buscamos alguém com habilidades interpessoais e proatividade.",
      escolaridadeMinima: "Ensino Superior completo em Psicologia, Administração ou áreas afins.",
      cursoSuperior: "Graduação em Psicologia, Administração ou áreas correlatas.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Vale-transporte, plano de saúde e vale-alimentação.",
      tags: {
        habilidades: ["Recrutamento e Seleção", "Legislação Trabalhista"],
        experiencia: true,
        nivel: "Pleno"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "09:00/18:00",
      horarioDeCriacao: "10:30",
      pais: "Uruguai",
      cidade: "Montevídeu"
    },
    {
      id: 7,
      tituloDaVaga: "Designer Gráfico - Junior",
      formaDeRemuneracao: "A combinar",
      descricaoDoBanner: "Estamos em busca de um designer gráfico criativo e dedicado. Se você tem paixão por design e está sempre antenado nas tendências visuais, essa vaga é para você!",
      requisitos: "Experiência em design gráfico, conhecimento em Adobe Creative Suite.",
      descricaoDaVaga: "O profissional será responsável pela criação de materiais visuais para campanhas e redes sociais. Buscamos alguém com senso estético apurado e habilidades de comunicação visual.",
      escolaridadeMinima: "Ensino Superior completo em Design Gráfico ou áreas afins.",
      cursoSuperior: "Graduação em Design Gráfico ou áreas correlatas.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Vale-transporte, plano de saúde e vale-alimentação.",
      tags: {
        habilidades: ["Adobe Creative Suite", "Design Gráfico"],
        experiencia: false,
        nivel: "Junior"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "09:30/18:30",
      horarioDeCriacao: "12:00",
      pais: "Jamaica",
      cidade: "Kingston"
    },
    {
      id: 8,
      tituloDaVaga: "Analista Financeiro - Pleno",
      formaDeRemuneracao: "Salário fixo + benefícios",
      descricaoDoBanner: "Procuramos um analista financeiro experiente e comprometido. Se você tem sólidos conhecimentos em finanças corporativas, essa vaga é para você!",
      requisitos: "Experiência comprovada em análise financeira, conhecimento em contabilidade.",
      descricaoDaVaga: "O analista será responsável por análise de balanços, projeções financeiras e relatórios gerenciais. Buscamos alguém com visão estratégica e habilidades analíticas.",
      escolaridadeMinima: "Ensino Superior completo em Ciências Contábeis, Administração ou áreas afins.",
      cursoSuperior: "Graduação em Ciências Contábeis, Administração ou áreas correlatas.",
      jornadaDeTrabalho: "40 horas/semana",
      beneficios: "Plano de saúde, vale-refeição e participação nos lucros.",
      tags: {
        habilidades: ["Análise Financeira", "Contabilidade"],
        experiencia: true,
        nivel: "Pleno"
      },
      horas: "40 horas/semana",
      horarioDoTrabalho: "08:30/17:30",
      horarioDeCriacao: "11:30",
      pais: "Uruguai",
      cidade: "Biena Vida"
   },
   {
    id: 9,
    tituloDaVaga: "Engenheiro de Segurança da Informação - Senior",
    formaDeRemuneracao: "A combinar",
    descricaoDoBanner: "Estamos em busca de um engenheiro de segurança da informação sênior para fortalecer nossa equipe. Se você é especializado em cibersegurança, essa vaga é para você!",
    requisitos: "Experiência comprovada em segurança da informação, certificações CISSP, CISM serão consideradas um diferencial.",
    descricaoDaVaga: "O profissional será responsável pela implementação de políticas de segurança, auditorias e gestão de incidentes. Buscamos alguém proativo e com sólidos conhecimentos em cibersegurança.",
    escolaridadeMinima: "Ensino Superior completo na área de Tecnologia da Informação.",
    cursoSuperior: "Graduação em Segurança da Informação, Ciência da Computação ou áreas relacionadas.",
    jornadaDeTrabalho: "40 horas/semana",
    beneficios: "Plano de saúde, vale-refeição e participação nos lucros.",
    tags: {
      habilidades: ["Cibersegurança", "CISSP", "CISM"],
      experiencia: true,
      nivel: "Sênior"
    },
    horas: "40 horas/semana",
    horarioDoTrabalho: "09:00/18:00",
    horarioDeCriacao: "09:30",
    pais: "Venezuela",
    cidade: "Carakas"
  },
  {
    id: 10,
    tituloDaVaga: "Assistente Administrativo",
    formaDeRemuneracao: "Salário fixo",
    descricaoDoBanner: "Estamos contratando um assistente administrativo para apoiar as operações diárias da empresa. Se você é organizado e proativo, essa vaga é para você!",
    requisitos: "Experiência em funções administrativas, conhecimento em pacote Office.",
    descricaoDaVaga: "O assistente será responsável por atividades administrativas, arquivamento de documentos e suporte em processos internos. Buscamos alguém com habilidades multitarefa e atenção aos detalhes.",
    escolaridadeMinima: "Ensino Médio completo, desejável cursando Ensino Superior em Administração ou áreas afins.",
    cursoSuperior: "Cursando Ensino Superior em Administração ou áreas correlatas será considerado um diferencial.",
    jornadaDeTrabalho: "40 horas/semana",
    beneficios: "Vale-transporte, plano de saúde e vale-alimentação.",
    tags: {
      habilidades: ["Pacote Office", "Organização"],
      experiencia: false,
      nivel: "Junior"
    },
    horas: "40 horas/semana",
    horarioDoTrabalho: "08:00/17:00",
    horarioDeCriacao: "10:00",
    pais: "Colômbia",
    cidade: "Bogotá"
  },
  {
    id: 11,
    tituloDaVaga: "Analista de Qualidade - Sênior",
    formaDeRemuneracao: "A combinar",
    descricaoDoBanner: "Estamos em busca de um analista de qualidade sênior para garantir a excelência dos nossos produtos. Se você é apaixonado por testes e qualidade, essa vaga é para você!",
    requisitos: "Experiência comprovada em teste de software, conhecimento em metodologias ágeis.",
    descricaoDaVaga: "O analista será responsável por elaborar e executar casos de teste, além de participar de processos de melhoria contínua. Buscamos alguém com atenção aos detalhes e comprometimento com a qualidade.",
    escolaridadeMinima: "Ensino Superior completo na área de Tecnologia da Informação.",
    cursoSuperior: "Graduação em Engenharia de Software, Sistemas de Informação ou áreas afins.",
    jornadaDeTrabalho: "40 horas/semana",
    beneficios: "Plano de saúde, vale-refeição e participação nos lucros.",
    tags: {
      habilidades: ["Teste de Software", "Metodologias Ágeis"],
      experiencia: true,
      nivel: "Sênior"
    },
    horas: "40 horas/semana",
    horarioDoTrabalho: "09:00/18:00",
    horarioDeCriacao: "11:30",
    pais: "Egito",
    cidade: "Cairo"
  }

  ];

  if(req.method === "GET"){
    setTimeout(() => {
      res.status(200).json({dataCards})
    }, 1000)
  }else{
    res.status(500).json({ mensagem: "Algo incorreto aconteceu" })
  }
}
