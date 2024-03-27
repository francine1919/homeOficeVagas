import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Link from "next/link";

import styles from "@/styles/pesquisa.module.scss";

import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

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
                  <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por mais de 2.000 mil pessoas POR DIAA!</p>
                  <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                </div>
                <Link id={styles.btnWantBanner} href="/">Quero este Banner</Link>
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
                     <div>
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
                  <Link id={styles.goInternationalJobPage} href="/vagas-locais">Vagas Locais</Link>
                  <Link id={styles.goLocalJobPage} href="/vagas-internacionais">Vagas Internacionais</Link>
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
                <p id={styles.descriptionAdvertising}>Aqui o seu anuncio é visto por mais de 2.000 pessoas todos os dias. Venha ser visto, a sua empresa precisa disso.</p>
              </div>
              <Link href="/" id={styles.wantBannerTwo}>Quero este banner</Link>
            </div>
          </div>
        </div>

        <Footer/>
    </div>
  )
}
