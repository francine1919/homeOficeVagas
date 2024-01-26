import Link from "next/link";

import CardJobs from "@/components/cardJobs/CardJobs";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/vagas.module.scss";

import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import axios from "axios";

export default function VagasLocais() {
  const [job, setVaga] = useState();
  const [dataCountrys, setDataCountrys] = useState();
  const [country, setCountry] = useState();
  const [dataCitys, setDataCitys] = useState();
  const [city, setCity] = useState();
  const [statusBtnFilter, setStatusBtnFilter] = useState(false);
  const [statusBtnCleanFilter, setStatusBtnCleanFilter] = useState(false)

  async function handleApi(){
    await axios.get(`http://${window.location.host}/api/vagas`)
    .then((response) => {
      const dataResponse = response.data.dataCards;
      setDataCountrys(dataResponse)
    })
    .catch((error) => {
      console.log("your error", error.message)
    })
  }

  async function handleCitys(){
    if(!dataCountrys){
      console.log("ainda nao temos data country")
    }else{
      const citys = dataCountrys.filter((vagas) => {
        return vagas.pais === country
      }).map((objetos) => {
        return objetos.cidade
      })
      setDataCitys(citys)
    }
  }

  function alterStatusBtnFilter(e){
    e.preventDefault();
    if(statusBtnFilter){
      setTimeout(() => {
        setStatusBtnFilter(false)
      },3000)
    }else{
      setStatusBtnFilter(true)
    }
  }

  function cleanFilter(){
    if(job || country || city){
      setStatusBtnCleanFilter(true)
      setVaga(undefined)
      setCountry(undefined)
      setCity(undefined)
    }else{
      setStatusBtnCleanFilter(false)
    }
  }

  useEffect(() => {
    handleApi()
  }, [])

  useEffect(() => {
    handleCitys()
  },[country])

  console.log("valores", job,country,city)

  return (
    <div id={styles.vagas} className={robotoFlex.className}>
      <Header/>

      <div id={styles.bannerOne} className={styles.bannerOneLocal}>
        <div id={styles.bgBannerOne}>
          <div id={styles.contentBannerOne}>
            <div id={styles.boxTitleOne}>
              <h1 id={styles.titleBannerOne}>Vagas Locais</h1>
            </div>
            <div id={styles.boxDescriptionOne}>
              <p id={styles.descriptionBannerOne}>As vagas locais são destinadas apenas para o Brasil, aqui voce ver vagas de todas as regiões e também de todos os estados Brasileiros.</p>
            </div>
          </div>
        </div>
      </div>

      <main id={styles.mainContent}>
        <div id={styles.sectionCardAndBanner}>
          <div id={styles.boxFilter}>
            <h3 id={styles.titleMainFilter}>Filtrar Resultados</h3>
            <form id={styles.formFilter} onSubmit={alterStatusBtnFilter}>
              <div id={styles.boxMainForm}>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Vaga</label>
                  <input className={styles.entrysFilter} onChange={(e) => setVaga(e.target.value)} type="text" />
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">País</label>
                  <select className={styles.entrysFilter} onChange={(e) => setCountry(e.target.value)}>
                    {Array.isArray(dataCountrys) && dataCountrys.length > 0 ? (
                      <>
                        <option>Países encontrados!</option>
                        {dataCountrys.map((item) => <option key={item.id}>{item.pais}</option>)}
                      </>
                    ):
                      <option>carregando...</option>}
                  </select>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Cidade</label>
                  <select className={styles.entrysFilter} onChange={(e) => setCity(e.target.value)} id="">
                    {dataCitys ? (
                      <>
                        <option>Escolha uma cidade</option>
                        {dataCitys.map((item) => <option key={item}>{item}</option>)}
                      </>
                    ) :
                    <option>Escolha um País</option>}
                  </select>
                </div>
              </div>
              <div id={styles.boxButtonsFilter}>
                <button id={styles.btnFilter}>Filtrar</button>
                <button id={styles.btnCleanFilter} onClick={() => cleanFilter()}>Limpar Filtro</button>
              </div>
            </form>
          </div>
          
          <div id={styles.bannerTwo} className={styles.bannerTwoLocal}>
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

        <div id={styles.sectionCards}>
          <CardJobs 
            jobChoose={job}
            countrySelect={country}
            cityChoose={city}
            statusButtonFilter={statusBtnFilter}
            statusButtonCleanFilter={statusBtnCleanFilter}
          />
          <button id={styles.btnShowMoreJobs}>Mais vagas</button>
        </div>
      </main>

      <div id={styles.advertising} className={styles.bannerTreeLocal}>
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

      <div id={styles.blogSection}>
        <div>
          <h2 id={styles.titleMainBlog}>Noticias do nosso Blog</h2>
        </div>
        <div id={styles.contentBlog}>
          <div className={styles.boxBlog}>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Brasília é escolhida para sediar o maior evento de mercado de trabalho do Centro-Oeste.</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Sesc abre 500 vagas de emprego temporário neste fim de ano.</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
          </div>
          <div className={styles.boxBlog}>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Veja aqui como está o mercado de TI e como conseguir uma bolsa de estudos Grátis!</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Como se dar bem em uma entrevista de emprego com Ana Sirquera</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
