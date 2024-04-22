import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

import Link from "next/link";

import styles from "@/styles/404.module.scss";
import { robotoFlex } from "@/fonts/font";
import Head from "next/head";

export default function NotFoundPage(){
    return(
        <div className={robotoFlex.className} id={styles.page404}>
            <Head>
                <title>Erro 404 - Página Não Encontrada | Home Office Vagas</title>
                <meta name="description" content="A página que você está tentando acessar não foi encontrada. Verifique se o URL está correto ou retorne à página inicial." />
            </Head>
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