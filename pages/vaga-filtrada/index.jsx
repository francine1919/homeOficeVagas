import CardJobs from "@/components/cardJobs/CardJobs";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { robotoFlex } from "@/fonts/font";

import styles from "@/styles/vagas.module.scss"

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

export default function VagaFiltrada() {
    const [search, setSearch] = useState(false);
    const [filter, setFilter] = useState(false);

    const searchState = useSelector((state) => state.search)
    const dataJobs = useSelector((state) => state.dataMainSlice)

    const searchPagHome = searchState.search;
    const filterTitlePagHome = searchState.filter.title;
    const filterCountryPagHome = searchState.filter.country;
    const filterCityPagHome = searchState.filter.city;

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
                      <form id={styles.formFilter}>
                          <div id={styles.boxMainForm}>
                              <div className={styles.boxInputs}>
                                <label className={styles.titleFilter} htmlFor="">Vaga</label>
                                <input className={styles.entrysFilter} onChange={(e) => setVaga(e.target.value)} type="text" />
                              </div>
                              <div className={styles.boxInputs}>
                                  <label className={styles.titleFilter} htmlFor="">País</label>
                                  <select className={styles.entrysFilter} onChange={(e) => setCountry(e.target.value)}>
                                      {/* {Array.isArray(dataCountrys) && dataCountrys.length > 0 ? (
                                        <>
                                          <option>Países encontrados!</option>
                                          {dataCountrys.map((item) => <option key={item.id}>{item.pais}</option>)}
                                        </>
                                      ):
                                      <option>carregando...</option>} */}
                                      <option value="">Brasil</option>
                                  </select>
                              </div>
                              <div className={styles.boxInputs}>
                                  <label className={styles.titleFilter} htmlFor="">Cidade</label>
                                  <select className={styles.entrysFilter} onChange={(e) => setCity(e.target.value)} id="">
                                      {/* {dataCitys ? (
                                        <>
                                          <option>Escolha uma cidade</option>
                                          {dataCitys.map((item) => <option key={item}>{item}</option>)}
                                        </>
                                      ) :
                                      <option>Escolha um País</option>} */}
                                      <option value="">Brasilia</option>
                                  </select>
                              </div>
                          </div>
                          <div id={styles.boxButtonsFilter}>
                            <button id={styles.btnFilter}>Filtrar</button>
                            <button id={styles.btnCleanFilter}>Limpar Filtro</button>
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
                            <Link id={styles.btnWantBanner} href="/">Quero este Banner</Link>
                          </div>
                        </div>
                    </div>
                </div>

                {filterTitlePagHome || filterCountryPagHome || filterCityPagHome || searchPagHome ? 
                
                filterTitlePagHome || filterCountryPagHome || filterCityPagHome ? 
                
                <div>
                  {filterTitlePagHome || filterCountryPagHome || filterCityPagHome ? <>
                  <div id={styles.infoAboutJobs}>
                    <h4 id={styles.resultJobsTitle}>Exibindo vagas de emprego relacionado a: {filterTitlePagHome || "Titulo: Não Inserido"} - {filterCountryPagHome || "País: Não inserido"} - {filterCityPagHome || "Cidade: não inserido"}</h4>
                    <span id={styles.resultsJobs}>Resultado: 24 vagas</span>
                  </div>
                  <div>
                  <CardJobs 
                    jobChoose={filterTitlePagHome}
                    countrySelect={filterCountryPagHome}
                    cityChoose={filterCityPagHome}
                  />
                    <button id={styles.btnShowMoreJobs}>Mais vagas</button>
                  </div>
                  
                  </> : <div id={styles.jobNotFound}>
                          <h2 id={styles.jobNotFoundTitle}>Não achamos nenhuma vaga relacionada a: {filterTitlePagHome} - {filterCountryPagHome} - {filterCityPagHome}</h2>
                          <p id={styles.jobNotFoundDescription}>Tente pesquisar por outras vagas e aproveite para usar o filtro ao lado!</p>
                          <Link id={styles.goBlog} href="/blog">Ir para Blog</Link>
                        </div>}
                </div>
                
                : searchPagHome ? 
                
                <div id={styles.responseSearch}>
                    <div id={styles.boxResponseSearch}>
                        <div id={styles.boxSearch}>
                          <h4 id={styles.searchTitle}>Exibindo resultados sobre: {searchPagHome}</h4>
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
                : <div id={styles.searchNotFound}>
                    <h2 id={styles.searchNotFoundTitle}>Não achamos nada relacionado a: {searchPagHome}</h2>
                    <p id={styles.searchNotFoundDescription}>Tente pesquisar por outros assuntos ou visite o nosso Blog! É só clicar no botão abaixo.</p>
                    <Link id={styles.goBlog} href="/blog">Ir para Blog</Link>
                  </div>

                : <p>Voce nao pesquisou nada</p>
                }                  
            </main>

            <div id={styles.advertising} className={styles.bannerTreeFiltro}>
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
