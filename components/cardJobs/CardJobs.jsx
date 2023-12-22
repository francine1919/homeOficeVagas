import Link from "next/link.js";

import styles from "./CardJobs.module.scss"

import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function CardJobs() {
  const [jobList, setJobList] = useState("");

  const route = useRouter()

  console.log("TUDO SOBRE A ROTA", route)

  async function getJobs(){
    await axios.get("http://localhost:3000/api/vagas")
      .then((response) => {
        setJobList(response.data.dataCards)
      })
      .catch((error) => {
        console.log("ERROR", error.message)
      })
  }

  useEffect(() => {
    getJobs()
  }, [])

  return (
    <div>
        {jobList ? jobList.map((card) =>
            <div key={card.id} className={styles.card}>
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
                        <li className={styles.tags}>{card.tags.habilidades[0]}</li>
                        <li className={styles.tags}>{card.tags.habilidades[1]}</li>
                        <li className={styles.tags}>{card.tags?.habilidades[2]}</li>
                        <li className={styles.tags}>{card.tags?.habilidades[3]}</li>
                        <li className={styles.tags}>{card.horarioDeCriacao}</li>
                    </ul>
                </div>
            </div>
        ) : <div id={styles.loadingJobs}>carregando vagas...</div> }
    </div>
  )
}
