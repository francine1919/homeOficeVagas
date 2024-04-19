import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { robotoFlex } from "@/fonts/font";

import styles from "@/styles/vagas.module.scss"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";

import axios from "axios";
import { newSearch } from "@/redux/searchHome/searchHomeSlice";

export default function VagaFiltrada() {
    const [dataJobs, setDataJobs] = useState();
    const [cards, setCards] = useState();

    const [countrys, setCountrys] = useState();
    const [citys, setCitys] = useState();
    
    const [job, setJob] = useState();
    const [countrySelect, setCountrySelect] = useState();
    const [citySelect, setCitySelect] = useState();
    
    const searchState = useSelector((state) => state.search);
    const dispatch = useDispatch();

    const searchPagHome = searchState;

    const filterTitlePagHome = searchPagHome.value.filter.title;
    const filterCountryPagHome = searchPagHome.value.filter.country;
    const filterCityPagHome = searchPagHome.value.filter.city;

    const minLimit = 0;
    const maxLimit = 5;

    const mostrarMaisNomes = () => {
      const proximoLimiteSuperior = cards.length + 5;
      const maisNomes = dataJobs.slice(cards.length, proximoLimiteSuperior);
      setCards([...cards, ...maisNomes]);
      
      if(dataJobs.length === cards.length){
        alert("As vagas acabaram!")
      }else{
        return null
      }
    };

    async function getAllJobs(){
      const configApi = {
        method: 'get',
        url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/offers',
        headers: {
          'X-Custom-Jobs': 'my-secret-endpoint-1@@89'
        }
      }

      axios(configApi)
      .then((response) => {
        setDataJobs(response.data)

        const countrys = response.data.map((item) => item.pais)
        setCountrys([...new Set(countrys)]);
      })
      .catch((error) => {
        return null
      })
    }

    async function showCard(){
      try {
        if(filterTitlePagHome){
          const filterTitle = await dataJobs.filter((item) => filterTitlePagHome.toLowerCase() === item.tituloDaVaga.toLowerCase())
          setCards(filterTitle)
        }
        if(filterCountryPagHome){
          const filterCountry = await dataJobs.filter((item) => filterCountryPagHome === item.pais)
          setCards(filterCountry)
        }
        if(filterTitlePagHome && filterCountryPagHome){
          const filterTitleAndCountry = await dataJobs.filter((item) => filterTitlePagHome === item.tituloDaVaga && filterCountryPagHome === item.pais)
          setCards(filterTitleAndCountry)
        }
        if(filterCountryPagHome && filterCityPagHome){
          const filterCountryAndCity = await dataJobs.filter((item) => filterCountryPagHome === item.pais && filterCityPagHome === item.cidade)
          setCards(filterCountryAndCity)
        }
        if(filterTitlePagHome && filterCountryPagHome && filterCityPagHome){
          const completeFilter = await dataJobs.filter((item) => filterTitlePagHome.toLowerCase() === item.tituloDaVaga.toLowerCase() && filterCountryPagHome === item.pais && filterCityPagHome === item.cidade)
          setCards(completeFilter)
        }
      } catch (error) {
        return null
      }
    }

    function putOnState(e){
      e.preventDefault()
      showCard()
      dispatch(newSearch({
        title: job,
        country: countrySelect,
        city: citySelect
      }
    ))
    }

    function cleanerState(){
      setJob("")
      setCountrySelect("")
      setCitySelect("")
    } 

    useEffect(() => {
      showCard()
    }, [filterTitlePagHome, filterCountryPagHome, filterCityPagHome, dataJobs]);

    useEffect(() => {
      getAllJobs()
    }, [])

    useEffect(() => {
      if(dataJobs){
        const filterCitys = dataJobs.filter((item) => item.pais === countrySelect).map((item) => item.cidade);
        setCitys([...new Set(filterCitys)]);
      }
    }, [countrySelect])

    useEffect(() => {
      if(cards){
        setCards(dataJobs.slice(minLimit, maxLimit));
      }
    }, []);

    return (
        <div id={styles.vagas} className={robotoFlex.className}>
            <Header/>

            <div id={styles.bannerOne} className={styles.bannerOneFiltro}>
                <div id={styles.bgBannerOne}>
                  <div id={styles.contentBannerOne}>
                    <div id={styles.boxTitleOneFilter}>
                      <h1 id={styles.titleBannerOneFilter}>A Home Office Vagas te ajuda a achar o seu emprego!</h1>
                      <p id={styles.descriptionBannerOneFilter}>Aqui na Home Office Vagas nós te ajudamos a conseguir a sua vaga Home Office, seja ela no Brasil ou Fora daqui, veja as nossa vagas e aproveite para acompanhar o que acontece na página na sessao de Blog. </p>
                    </div>
                  </div>
                </div>
            </div>

            <main id={styles.mainContent}>
                <div>
                  <div id={styles.boxFilter}>
                      <h3 id={styles.titleMainFilter}>Filtrar Resultados</h3>
                      <form id={styles.formFilter} onSubmit={putOnState}>
                          <div id={styles.boxMainForm}>
                              <div className={styles.boxInputs}>
                                <label className={styles.titleFilter} htmlFor="">Vaga</label>
                                <input className={styles.entrysFilter} value={job} onChange={(e) => setJob(e.target.value)} type="text" />
                              </div>
                              <div className={styles.boxInputs}>
                                  <label className={styles.titleFilter} htmlFor="">País</label>
                                  <select className={styles.entrysFilter} value={countrySelect} onChange={(e) => setCountrySelect(e.target.value)}>
                                      {Array.isArray(countrys) && countrys.length > 0 ? (
                                        <>
                                          <option>Países encontrados!</option>
                                          {countrys.map((item) => <option key={item}>{item}</option>)}
                                        </>
                                      ):
                                      <option>carregando...</option>}
                                  </select>
                              </div>
                              <div className={styles.boxInputs}>
                                  <label className={styles.titleFilter} htmlFor="">Cidade</label>
                                  <select className={styles.entrysFilter} value={citySelect} onChange={(e) => setCitySelect(e.target.value)} id="">
                                      {citys ? (
                                        <>
                                          <option>Escolha uma cidade</option>
                                          {citys.map((item) => <option key={item}>{item}</option>)}
                                        </>
                                      ) :
                                      <option>Escolha um País</option>}
                                  </select>
                              </div>
                          </div>
                          <div id={styles.boxButtonsFilter}>
                            <button id={styles.btnFilter}>Filtrar</button>
                            <button id={styles.btnCleanFilter} onClick={() => cleanerState()}>Limpar Filtro</button>
                          </div>
                      </form>
                    </div>
                    <div id={styles.bannerTwo} className={styles.bannerTwoFiltro}>
                        <div id={styles.bgBannerTwo}>
                          <div id={styles.contentBannerTwo}>
                            <h3 id={styles.titleBannerTwo}>Anuncie sua empresa com a gente!</h3>
                            <div id={styles.boxDescriptionTwo}>
                              <p className={styles.descriptionTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                              <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por mais de 2.000 mil pessoas POR DIAA!</p>
                              <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                            </div>
                            <a id={styles.btnWantBanner} href="homeofficevagas77@gmail.com">Quero este Banner</a>
                          </div>
                        </div>
                    </div>
                </div>
                {filterTitlePagHome || filterCountryPagHome || filterCityPagHome ?  
                
                cards ? (
                  <div>
                    <div id={styles.infoAboutJobs}>
                      <h4 id={styles.resultJobsTitle}>Exibindo vagas de emprego relacionado a: {filterTitlePagHome || null} {filterCountryPagHome || null} {filterCityPagHome || null}</h4>
                      <span id={styles.resultsJobs}>Resultado: {cards.length} vagas</span>
                    </div>
                    <div>
                      {cards.map((card) => (
                        <div key={card.id} className={styles.card}>
                          <div className={styles.boxTitle}>
                              <h2 className={styles.title}>{card.tituloDaVaga}</h2>
                              <h3 className={styles.remuneration}>{card.formaDeRemuneracao}</h3>
                          </div>
                          <div className={styles.boxDescription}>
                              <p className={styles.descriptionJob}>{card.descricaoDaVaga}</p>
                          </div>
                          <div className={styles.boxAboutJob}>
                              <Link className={styles.showJob} href={`/vaga-filtrada/${card.id}`} >Verificar Vaga</Link>
                              <ul className={styles.unList}>
                                <li className={styles.tags}>{card.tags.habilidades[0]}</li>
                                <li className={styles.tags}>{card.tags.habilidades[1]}</li>
                                <li className={styles.tags}>{card.tags?.habilidades[2]}</li>
                                <li className={styles.tags}>{card.tags?.habilidades[3]}</li>
                                <li className={styles.tags}>{card.horarioDeCriacao}</li>
                              </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  <div>
                    <button id={styles.btnShowMoreJobs} onClick={() => mostrarMaisNomes()}>Mais vagas</button>
                  </div>
                </div>
                ) : <h3 id={styles.waiting}>Aguarde...</h3>
                
                : <div id={styles.boxNotSearch}>
                    <h3 id={styles.notSearchOne}>Nada foi pesquisado.</h3>
                    <p id={styles.notSearchTwo}>Use o filtro nesta página se desejar buscar alguma vaga.</p>
                  </div>}             
            </main>

            <div id={styles.advertising} className={styles.bannerTreeFiltro}>
                <div id={styles.bgAdvertising}>
                  <div id={styles.contentAdvertising}>
                    <div id={styles.boxDescritionAdvertising}>
                      <h2 id={styles.titleAdvertising}>Anuncie sua empresa neste Banner!</h2>
                      <p id={styles.descriptionAdvertising}>Aqui o seu anuncio é visto por mais de 2.000 pessoas todos os dias. Venha ser visto, a sua empresa precisa disso.</p>
                    </div>
                    <a href="homeofficevagas77@gmail.com" id={styles.wantBannerTwo}>Quero este banner</a>
                  </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
}
