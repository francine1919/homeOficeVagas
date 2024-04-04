import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import Link from "next/link";

import styles from "@/styles/404.module.scss";
import { robotoFlex } from "@/fonts/font";

export default function NotFoundPage(){
    return(
        <div className={robotoFlex.className} id={styles.page404}>
            <Header/>
            <main id={styles.mainContent}>
                <div id={styles.boxContent}>
                    <h1 id={styles.titleOps}>Ooops!</h1>
                    <p id={styles.description}>A pagina que voce está procurando não existe no site. Volte para a Home clicando no botão abaixo.</p>
                    <Link id={styles.goHome} href="/">Página Inicial</Link>
                </div>
            </main>
            <Footer/>    
        </div>
    )
}