import Link from "next/link.js";

import styles from "./CardJobs.module.scss"

export default function CardJobs() {

    /* --------------------------------------------------------------------------------------------- */

    const dataCards = [
        {
          id: 1,  
          tituloDaVaga: "Secretariado com APX",
          formaDeRemuneracao: "A combinar",
          descricaoDaVaga: "Estamos precisando de um profissional da área que saiba mexer com Figma, CorelDraw, InDesign e Canva. O trabalho é somente para pessoas com EXPERIÊNCIA.",
          tags: {
            tecnologias: ["Figma", "CorelDraw", "InDesign", "Canva"],
            experiencia: true,
            nivel: "Sênior"
          },
          horas: "40 horas/semana",
          horarioDeCriacao: "12:30"
        },
        {
          id: 2,  
          tituloDaVaga: "Desenvolvedor Full Stack / Tech Innovations",
          formaDeRemuneracao: "A combinar",
          descricaoDaVaga: "Estamos em busca de um(a) desenvolvedor(a) full stack apaixonado(a) por criar soluções inovadoras. Se você possui experiência em desenvolvimento front-end e back-end, venha fazer parte do nosso time!",
          tags: {
            tecnologias: ["React", "Node.js", "MongoDB", "CSS", "HTML"],
            experiencia: true,
            nivel: "Pleno"
          },
          horas: "40 horas/semana",
          horarioDeCriacao: "14:45"
        },
        {
          id: 3,  
          tituloDaVaga: "Engenheiro de Dados / DataTech Solutions",
          formaDeRemuneracao: "A combinar",
          descricaoDaVaga: "Procuramos um(a) engenheiro(a) de dados talentoso(a) para trabalhar em projetos de análise de dados e machine learning. Se você tem experiência em manipulação e processamento de grandes conjuntos de dados, junte-se à nossa equipe!",
          tags: {
            tecnologias: ["Python", "Hadoop", "Spark", "SQL", "Machine Learning"],
            experiencia: true,
            nivel: "Sênior"
          },
          horas: "40 horas/semana",
          horarioDeCriacao: "15:30"
        }
      ];

    /* --------------------------------------------------------------------------------------------- */
  return (
    <div>
        {dataCards.map((card) =>
            <div className={styles.card}>
                <div className={styles.boxTitle}>
                    <h2 className={styles.title}>{card.tituloDaVaga}</h2>
                    <h3 className={styles.remuneration}>{card.formaDeRemuneracao}</h3>
                </div>
                <div className={styles.boxDescription}>
                    <p className={styles.descriptionJob}>{card.descricaoDaVaga}</p>
                </div>
                <div className={styles.boxAboutJob}>
                    <Link className={styles.showJob} href={`/vagas-locais/${card.id}`} >Verificar Vaga</Link>
                    <ul className={styles.unList}>
                        <li className={styles.tags}>{card.tags.tecnologias[0]}</li>
                        <li className={styles.tags}>{card.tags.tecnologias[1]}</li>
                        <li className={styles.tags}>{card.tags.tecnologias[2]}</li>
                        <li className={styles.tags}>{card.tags.tecnologias[3]}</li>
                        <li className={styles.tags}>{card.horarioDeCriacao}</li>
                    </ul>
                </div>
            </div>
        )}
    </div>
  )
}
