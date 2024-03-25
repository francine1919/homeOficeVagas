import Header from "@/components/header/Header";
import styles from "@/styles/vagas.module.scss"
import Link from "next/link";

export default function PesquisaHov() {
  return (
    <div>
        <Header/>

        <div id={styles.responseSearch}>
            <div id={styles.boxResponseSearch}>
                <div id={styles.boxSearch}>
                  <h4 id={styles.searchTitle}>Exibindo resultados sobre:</h4>
                  <span id={styles.searchResults}>Resultado: 2 Artigos</span>
                </div>
            </div>    
            <Link href="/bolas" id={styles.cardSearch}>
                <div id={styles.boxCardSearch}>
                  <h3 id={styles.titleCardSearch}>Senai lança processo seletivo com + de 200 vagas até o dia 28/06.</h3>
                  <p id={styles.descriptionSearch}>Por Maria Aquino, sexta-feira, 9 de agosto de 2023</p>
                </div>
                <div id={styles.boxTagsSearch}>
                  <span className={styles.tagsSearch}>Senai</span>
                  <span className={styles.tagsSearch}>Emprego</span>
                  <span className={styles.tagsSearch}>Processo Seletivo</span>
                </div>
            </Link>   
            <Link href="/bolas" id={styles.cardSearch}>
                <div id={styles.boxCardSearch}>
                  <h3 id={styles.titleCardSearch}>Senai lança processo seletivo com + de 200 vagas até o dia 28/06.</h3>
                  <p id={styles.descriptionSearch}>Por Maria Aquino, sexta-feira, 9 de agosto de 2023</p>
                </div>
                <div id={styles.boxTagsSearch}>
                  <span className={styles.tagsSearch}>Senai</span>
                  <span className={styles.tagsSearch}>Emprego</span>
                  <span className={styles.tagsSearch}>Processo Seletivo</span>
                </div>
            </Link>
        </div>

        <div id={styles.searchNotFound}>
            <h2 id={styles.searchNotFoundTitle}>Não achamos nada relacionado a: </h2>
            <p id={styles.searchNotFoundDescription}>Tente pesquisar por outros assuntos ou visite o nosso Blog! É só clicar no botão abaixo.</p>
            <Link id={styles.goBlog} href="/blog">Ir para Blog</Link>
        </div>
    </div>
  )
}
