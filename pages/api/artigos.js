export default async function artigos(req,res){
    const data = [
        {
            id: 1,
            titulo: "Brasil cria 306,1 mil empregos formais em fevereiro",
            escritoPor: "Por Luana Zanobia, quarta-feira, 8 de Maio de 2024",
            tags: [
                "Formais",
                "Inflacao",
                "Geracao"
            ],
            url: "https://veja.abril.com.br/economia/brasil-cria-3061-mil-empregos-formais-em-fevereiro/"
        },
        {
            id: 2,
            titulo: "Brasil investe na recuperação do fluxo de turistas estrangeiros de 2019",
            escritoPor: "Por Valéria França, sexta-feira, 17 de maio de 2024",
            tags: [
                "Turista",
                "Internacional",
                "Economia"
            ],
            url: "https://veja.abril.com.br/brasil/brasil-investe-a-recuperacao-do-fluxo-de-turistas-estrangeiros-de-2019/"
        },
        {
            id: 3,
            titulo: "Agências do trabalhador terminam a semana com 520 vagas de emprego disponíveis",
            escritoPor: "Por Catarina Loiola, quinta-feira, 16 de maio de 2024",
            tags: [
                "PCD",
                "Remuneração",
                "Empregador"
            ],
            url:"https://www.agenciabrasilia.df.gov.br/2024/05/16/agencias-do-trabalhador-terminam-a-semana-com-520-vagas-de-emprego-disponiveis/"
        },
        {
            id: 4,
            titulo: "Verisure tem mais de 200 chances de emprego para atendimento, vendas e outros setores",
            escritoPor: "Por Extra, segunda-feira, 17 de Maio de 2024",
            tags: [
                "Vagas",
                "Processo Seletivo",
                "Oportunidade"
            ],
            url: "https://extra.globo.com/economia/emprego/noticia/2024/05/verisure-tem-mais-de-200-chances-de-emprego-para-atendimento-vendas-e-outros-setores.ghtml"
        },
        {
            id: 5,
            titulo: "DF tem 500 vagas de emprego com salários de até R$ 5 mil nesta sexta",
            escritoPor: "Por Luciano Arcoverde, domingo, 14 de setembro de 2023",
            tags: [
                "Cargos",
                "Agencia do Trabalhador",
                "Taguatinga Norte"
            ],
            url: "https://www.metropoles.com/distrito-federal/df-tem-500-vagas-de-emprego-com-salarios-de-ate-r-5-mil-nesta-sexta"
        }
    ];

    if(req.method === "GET"){
        setTimeout(() => {
          res.status(200).json({data})
        }, 1000)
    }else{
        res.status(500).json({ mensagem: "Algo incorreto aconteceu" })
    }
}