export default async function artigos(req,res){
    const data = [
        {
            id: 1,
            titulo: "Senai lança processo seletivo com + de 200 vagas até o dia 28/06.",
            escritoPor: "Por Maria Aquino, sexta-feira, 9 de agosto de 2023",
            tags: [
                "Senai",
                "Emprego",
                "Processo Seletivo"
            ]
        },
        {
            id: 2,
            titulo: "Novas descobertas científicas revolucionam a medicina moderna",
            escritoPor: "Por João Silva, terça-feira, 17 de outubro de 2023",
            tags: [
                "Ciência",
                "Medicina",
                "Descobertas Científicas"
            ]
        },
        {
            id: 3,
            titulo: "Startup inovadora lança aplicativo para facilitar o aprendizado de idiomas",
            escritoPor: "Por Ana Oliveira, quinta-feira, 5 de maio de 2023",
            tags: [
                "Startup",
                "Idiomas",
                "Tecnologia"
            ]
        },
        {
            id: 4,
            titulo: "Evento cultural traz artistas renomados à cidade",
            escritoPor: "Por José Santos, segunda-feira, 20 de fevereiro de 2023",
            tags: [
                "Cultura",
                "Arte",
                "Evento Cultural"
            ]
        },
        {
            id: 5,
            titulo: "Pesquisadores descobrem nova espécie de animal no fundo do oceano",
            escritoPor: "Por Laura Pereira, domingo, 14 de setembro de 2023",
            tags: [
                "Biologia Marinha",
                "Descobertas",
                "Natureza"
            ]
        },
        {
            id: 6,
            titulo: "Economia global enfrenta desafios diante de eventos recentes",
            escritoPor: "Por Carlos Fernandes, quarta-feira, 8 de junho de 2023",
            tags: [
                "Economia",
                "Global",
                "Desafios Econômicos"
            ]
        },
        {
            id: 7,
            titulo: "Novo filme blockbuster bate recordes de bilheteria no primeiro fim de semana",
            escritoPor: "Por Amanda Costa, segunda-feira, 3 de abril de 2023",
            tags: [
                "Cinema",
                "Filmes",
                "Blockbuster"
            ]
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