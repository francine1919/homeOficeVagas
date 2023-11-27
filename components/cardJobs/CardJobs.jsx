import Link from "next/link.js";

import { dataCards } from "../../utils/cardMocked.js";

import styles from "./CardJobs.module.scss"

export default function CardJobs() {
    const { tituloDaVaga,
            formaDeRemuneracao,
            descricaoDaVaga,
            tags,
            horas,
            horarioDeCriacao } = dataCards[0];
  return (
    <div>
        <div className={styles.card}>
            <div className={styles.boxTitle}>
                <h2 className={styles.title}>{tituloDaVaga}</h2>
                <h3 className={styles.remuneration}>{formaDeRemuneracao}</h3>
            </div>
            <div className={styles.boxDescription}>
                <p className={styles.descriptionJob}>{descricaoDaVaga}</p>
            </div>
            <div className={styles.boxAboutJob}>
                <Link className={styles.showJob} href="#">Verificar Vaga</Link>
                <ul className={styles.unList}>
                    <li className={styles.tags}>{tags.tecnologias[0]}</li>
                    <li className={styles.tags}>{tags.tecnologias[1]}</li>
                    <li className={styles.tags}>{tags.tecnologias[2]}</li>
                    <li className={styles.tags}>{tags.tecnologias[3]}</li>
                    <li className={styles.tags}>{horarioDeCriacao}</li>
                </ul>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.boxTitle}>
                <h2 className={styles.title}>{tituloDaVaga}</h2>
                <h3 className={styles.remuneration}>{formaDeRemuneracao}</h3>
            </div>
            <div className={styles.boxDescription}>
                <p className={styles.descriptionJob}>{descricaoDaVaga}</p>
            </div>
            <div className={styles.boxAboutJob}>
                <Link className={styles.showJob} href="#">Verificar Vaga</Link>
                <ul className={styles.unList}>
                    <li className={styles.tags}>{tags.tecnologias[0]}</li>
                    <li className={styles.tags}>{tags.tecnologias[1]}</li>
                    <li className={styles.tags}>{tags.tecnologias[2]}</li>
                    <li className={styles.tags}>{tags.tecnologias[3]}</li>
                    <li className={styles.tags}>{horarioDeCriacao}</li>
                </ul>
            </div>
        </div>

        <div className={styles.card}>
            <div className={styles.boxTitle}>
                <h2 className={styles.title}>{tituloDaVaga}</h2>
                <h3 className={styles.remuneration}>{formaDeRemuneracao}</h3>
            </div>
            <div className={styles.boxDescription}>
                <p className={styles.descriptionJob}>{descricaoDaVaga}</p>
            </div>
            <div className={styles.boxAboutJob}>
                <Link className={styles.showJob} href="#">Verificar Vaga</Link>
                <ul className={styles.unList}>
                    <li className={styles.tags}>{tags.tecnologias[0]}</li>
                    <li className={styles.tags}>{tags.tecnologias[1]}</li>
                    <li className={styles.tags}>{tags.tecnologias[2]}</li>
                    <li className={styles.tags}>{tags.tecnologias[3]}</li>
                    <li className={styles.tags}>{horarioDeCriacao}</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
