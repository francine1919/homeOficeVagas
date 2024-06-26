import Image from "next/image";

import disconnectImg from "@/public/imgErrors/error_500.jpg";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import { robotoFlex } from "@/fonts/font";

import styles from "@/styles/500.module.scss";
import Head from "next/head";

export default function ServerErrorPage() {
  return (
    <div className={robotoFlex.className} id={styles.page500}>
      <Head>
        <title>Erro 500 - Internal Server Error | Home Office Vagas</title>
        <meta name="description" content="Ocorreu um erro interno no servidor. Estamos trabalhando para resolver o problema. Tente novamente mais tarde." />
      
        <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
      </Head>
      <Header/>
      <div id={styles.boxMain}>
        <div id={styles.boxImg}>
          <Image id={styles.imgDisconnect} src={disconnectImg} width={300} height={300} alt="Erro de servidor"/>
        </div>
        <div id={styles.boxTitles}>
          <h1 id={styles.title}>Erro no Servidor!</h1>
          <p id={styles.description}>Pedimos desculpas pelo incomo gerado, a nossa equipe estará trabalhando para que o erro seja concertado, se preferir nos mande uma mensagem do que está acontecendo indo até a pagina de contatos.</p>
        </div>
      </div>
      <Footer/>  
    </div>
  )
}
