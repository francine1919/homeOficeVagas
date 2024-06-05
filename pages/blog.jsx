import Header from "@/components/header/Header";

import styles from "@/styles/blog.module.scss";

import { robotoFlex } from "@/fonts/font";
import Head from "next/head";

export default function Blog() {
  
  return (
    <div id={styles.pageBlog} className={robotoFlex.className}>
      <Head>
        <title>Blog - Home Office Vagas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Acompanhe as últimas novidades e dicas de carreira no Blog do Home Office Vagas. Em breve, teremos conteúdo exclusivo para ajudar você a encontrar o emprego dos seus sonhos!" />
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Blog - Home Office Vagas" />
        <meta property="og:description" content="Acompanhe as últimas novidades e dicas de carreira no Blog do Home Office Vagas. Em breve, teremos conteúdo exclusivo para ajudar você a encontrar o emprego dos seus sonhos!" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficevagas.com.br/blog" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="blog, Home Office Vagas, novidades, dicas de carreira, emprego" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="author" content="Equipe Home Office Vagas" />

        <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
      </Head>

      <Header/> 
      <div id={styles.boxInformation}>
        <h1 id={styles.waiting}>A pagina está sendo construída... Aguarde.</h1>
      </div>
    </div>
  )
}