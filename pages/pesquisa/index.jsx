import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Link from "next/link";

import styles from "@/styles/pesquisa.module.scss";

import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";
import Head from "next/head";

export default function PesquisaHov() {
  const [articles, setArticles] = useState();
  const [shownCard, setShownCard] = useState();

  const stateSearch = useSelector(state => state.search.value.search);

  async function getArticles(){
    const configApi = {
      method: 'get',
      url: `http://localhost:3000/api/artigos`
    }

    axios(configApi)
    .then((response) => {
      setArticles(response.data.data)
    })
    .catch((error) => {
      return null
    })
  };

  function removerAcentuacao(frase) {
    if(frase){
      return frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    }
  }

  function showArticles(){
    if(articles){
      const arrayCloned = articles.map(objeto => ({...objeto, titulo: removerAcentuacao(objeto.titulo)}));
      
      if(arrayCloned && arrayCloned.length > 0){
        if(!stateSearch){
          let stateLowerCase = "Sem pesquisa";
          setShownCard(stateLowerCase)
        }else{
          let stateLowerCase = stateSearch.toLowerCase()
          const filterArticles = articles.filter(objeto => objeto.titulo.includes(stateLowerCase));;
          setShownCard(filterArticles)
        }
      }
    }else{
      return null
    }
  }

  useEffect(() => {
    getArticles()
  }, [])
  
  useEffect(() => {
    showArticles()
  },[stateSearch, articles])

  return (
    <div id={styles.pesquisa} className={robotoFlex.className}>
      <Head>
        <title>Resultados da Pesquisa - Home Office Vagas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encontre o que está procurando no Home Office Vagas. Fique por dentro das últimas notícias e artigos sobre o mundo do trabalho, além de vagas locais e internacionais. Anuncie sua empresa conosco e alcance milhares de potenciais clientes diariamente." />
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Resultados da Pesquisa - Home Office Vagas" />
        <meta property="og:description" content="Encontre o que está procurando no Home Office Vagas. Fique por dentro das últimas notícias e artigos sobre o mundo do trabalho, além de vagas locais e internacionais. Anuncie sua empresa conosco e alcance milhares de potenciais clientes diariamente." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficejobs.com.br/pesquisa" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="pesquisa, vagas de emprego, notícias, artigos, vagas locais, vagas internacionais, anunciar empresa" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Equipe Home Office Vagas" />
        <link rel="canonical" href="https://homeofficejobs.com.br/pesquisa" />
      </Head>

        <Header/>

        <div id={styles.bannerOne}>
          <div id={styles.bgBannerOne}>
            <div id={styles.contentBannerOne}>
              <div id={styles.boxTitleOneFilter}>
                <h1 id={styles.titleBannerOneFilter}>Ache o que está pesquisando aqui!</h1>
                <p id={styles.descriptionBannerOneFilter}>Fique por dentro do que acontece no mundo do trabalho, aqui voce encontra muita coisa, desde artigos completos dizendo como se sair bem nas entrevistas até noticias quentinhas.</p>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.bannerAndMainContent}>
          <div id={styles.bannerTwo} className={styles.bannerTwoFiltro}>
            <div id={styles.bgBannerTwo}>
              <div id={styles.contentBannerTwo}>
                <h3 id={styles.titleBannerTwo}>Anuncie sua empresa com a gente!</h3>
                <div id={styles.boxDescriptionTwo}>
                  <p className={styles.descriptionTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                  <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por milhares de pessoas POR DIAA!</p>
                  <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                </div>
                <a id={styles.btnWantBanner} href="mailto:homeofficevagas77@gmail.com">Quero este Banner</a>
              </div>
            </div>
          </div>


          <main id={styles.mainContent}>
            <div>
              {shownCard && shownCard.length > 0 && Array.isArray(shownCard) ? 
                <div id={styles.responseSearch}> 
                  <div id={styles.boxResponseSearch}>
                   <div id={styles.boxSearch}>
                     <h4 id={styles.searchTitle}>Exibindo resultados sobre: {shownCard.length}</h4>
                     <span id={styles.searchResults}>Resultado: {shownCard.length}</span>
                   </div>
                  </div>
                
                  {shownCard.map((item) => {
                   return(
                     <div key={item.id}>
                       <Link href="/teste" id={styles.cardSearch}>
                          <div id={styles.boxCardSearch}>
                            <h3 id={styles.titleCardSearch}>{item.titulo}</h3>
                            <p id={styles.descriptionSearch}>{item.escritoPor}</p>
                          </div>
                          <div id={styles.boxTagsSearch}>
                            <span className={styles.tagsSearch}>{item.tags[0]}</span>
                            <span className={styles.tagsSearch}>{item.tags[1]}</span>
                            <span className={styles.tagsSearch}>{item.tags[2]}</span>
                          </div>
                       </Link>
                     </div>
                  )})}
                </div> 
               : 
                <div id={styles.searchNotFound}>
                  <h2 id={styles.searchNotFoundTitle}>Não achamos nada relacionado a: {stateSearch === undefined || stateSearch.length <= 0 ? "nada foi pesquisado" : stateSearch}</h2>
                  <p id={styles.searchNotFoundDescription}>Tente pesquisar por outros assuntos nas abas de Vagas locais e Vagas Internacionais.</p>
                  <div id={styles.goPages}>
                    <Link id={styles.goInternationalJobPage} href="/vagas-locais">Vagas Locais</Link>
                    <Link id={styles.goLocalJobPage} href="/vagas-internacionais">Vagas Internacionais</Link>
                  </div>
                </div> 
              }
            </div>
          </main>
        </div>

        <div id={styles.bannerTree}>
          <div id={styles.bgAdvertising}>
            <div id={styles.contentAdvertising}>
              <div id={styles.boxDescritionAdvertising}>
                <h2 id={styles.titleAdvertising}>Anuncie sua empresa neste Banner!</h2>
                <p id={styles.descriptionAdvertising}>Destaque sua empresa, alcance visibilidade constante. Seja notado por todos os clientes em potencial!</p>
              </div>
              <a href="mailto:homeofficevagas77@gmail.com" id={styles.wantBannerTwo}>Quero este banner</a>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}
