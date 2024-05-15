import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/vagas.module.scss";

import axios from "axios";
import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByJobs } from "@/redux/searchJobs/searchJobsSlice";
import Link from "next/link";
import Head from "next/head";


export default function VagasInternacionais() {
  const [nameJobChoice, setNameJobChoice] = useState();
  const [countryChoice, setCountryChoice] = useState(); 
  const [cityChoice, setCityChoice] = useState(); 
  const [dataCitys, setDataCitys] = useState();
  const [dataCountrys, setDataCountrys] = useState();
  const [message, setMessage] = useState("Aguarde um momento...");

  const[jobs, setJobs] = useState();
  
  const dispatch = useDispatch();
  
  const minLimit = 0;
  const maxLimit = 5;

  const [vagasMostradas, setVagasMostradas] = useState();

  const mostrarMaisNomes = () => {
    const proximoLimiteSuperior = vagasMostradas.length + 5;
    const maisNomes = jobs.slice(vagasMostradas.length, proximoLimiteSuperior);
    setVagasMostradas([...vagasMostradas, ...maisNomes]);
    
    if(jobs.length === vagasMostradas.length){
      alert("As vagas acabaram!")
    }else{
      return null
    }
  };

  async function getJobs(){
    const configApi = {
      method: 'get',
      url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/international/true',
      headers: {
        'X-Custom-Jobs': process.env.NEXT_PUBLIC_VALUE_API,
      }
    }

    axios(configApi)
    .then((response) => {
      setJobs(response.data)

      const countrys = response.data.map((item) => item.pais)
      setDataCountrys([...new Set(countrys)]);
    }).catch((error) => {
      return null
    }) 
  }

  async function showJobOrJobFilter(){
    try {
      if(nameJobChoice){
        const filterNameJobChoose = await jobs.filter((item) => nameJobChoice.toLowerCase() === item.tituloDaVaga.toLowerCase())
        setVagasMostradas(filterNameJobChoose)
      }
      if(countryChoice){
        const filterCountryChoice = await jobs.filter((item) => countryChoice === item.pais)
        setVagasMostradas(filterCountryChoice)
      }
      if(nameJobChoice && countryChoice){
        const filterJobAndCountry = await jobs.filter((item) => nameJobChoice === item.tituloDaVaga && countryChoice === item.pais)
        setVagasMostradas(filterJobAndCountry)
      }
      if(countryChoice && cityChoice){
        const filterCountryAndCity = await jobs.filter((item) => countryChoice === item.pais && cityChoice === item.cidade)
        setVagasMostradas(filterCountryAndCity)
      }
      if(nameJobChoice && countryChoice && cityChoice){
        const completeFilter = await jobs.filter((item) => nameJobChoice.toLowerCase() === item.tituloDaVaga.toLowerCase() && countryChoice === item.pais && cityChoice === item.cidade)
        setVagasMostradas(completeFilter)
      }
    } catch (error) {
      return null
    }
  }
  
  function putOnState(e){
    e.preventDefault()
    showJobOrJobFilter()
    dispatch(searchByJobs({nameJobChoice, countryChoice, cityChoice}))
  } 

  function cleanerState(){
    setNameJobChoice("")
    setCountryChoice("")
    setCityChoice("")

    const minClean = 0;
    const maxClean = 5;
    setVagasMostradas(jobs.slice(minClean, maxClean))
    
    dispatch(searchByJobs({nameJobChoice, countryChoice, cityChoice}))
  } 

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(() => {
    if(countryChoice){
      const searchCitys = jobs.filter((item) => item.pais === countryChoice).map((item) => item.cidade)

      setDataCitys([...new Set(searchCitys)])
    }
  },[countryChoice])

  useEffect(() => {
    if(!jobs){
      setMessage("estamos carregando suas vagas...")
    }else{
      setVagasMostradas(jobs.slice(minLimit, maxLimit));
    }
  }, [jobs, minLimit, maxLimit]);

  return (
    <div id={styles.vagas} className={robotoFlex.className}>
      <Head>
        <title>Vagas Internacionais - Home Office Vagas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encontre oportunidades de emprego internacional no Home Office Vagas. Escolha entre vagas em países como Portugal, Espanha, França e muito mais!" />
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Vagas Internacionais - Home Office Vagas" />
        <meta property="og:description" content="Encontre oportunidades de emprego internacional no Home Office Vagas. Escolha entre vagas em países como Portugal, Espanha, França e muito mais!" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficevagas.com.br/vagas-internacionais" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="vagas internacionais, emprego internacional, Portugal, Espanha, França, oportunidades de emprego" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Equipe Home Office Vagas" />
        <link rel="canonical" href="https://homeofficevagas.com.br/vagas-internacionais" />

        <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
      </Head>

      <Header/>

      <div id={styles.bannerOne} className={styles.bannerOneInternacional}>
        <div id={styles.bgBannerOne}>
          <div id={styles.contentBannerOne}>
            <div id={styles.boxTitleOne}>
              <h1 id={styles.titleBannerOne}>Vagas Internacionais</h1>
            </div>
            <div id={styles.boxDescriptionOne}>
              <p id={styles.descriptionBannerOne}>Aproveite as Vagas Internacionais para conseguir seu trabalho fora do Brasil, você escolhe, que tal Portugal? Espanha? ou até mesmo França!</p>
            </div>
          </div>
        </div>
      </div>

      <main id={styles.mainContent}>
        <div id={styles.sectionCardAndBanner}>
          <div id={styles.boxFilter}>
            <h3 id={styles.titleMainFilter}>Filtrar Resultados</h3>
            <form id={styles.formFilter} onSubmit={putOnState}>
              <div id={styles.boxMainForm}>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Vaga</label>
                  <input className={styles.entrysFilter} value={nameJobChoice} onChange={(e) => setNameJobChoice(e.target.value)} type="text" />
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">País</label>
                  <select className={styles.entrysFilter} value={countryChoice} onChange={(e) => setCountryChoice(e.target.value)}>
                    {Array.isArray(dataCountrys) && dataCountrys.length > 0 ? (
                      <>
                        <option>Países encontrados!</option>
                        {dataCountrys.map((item) => <option key={item.id}>{item}</option>)}
                      </>
                    ):
                      <option>carregando...</option>}
                  </select>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Cidade</label>
                  <select className={styles.entrysFilter} value={cityChoice} onChange={(e) => setCityChoice(e.target.value)} id="">
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
                <button id={styles.btnCleanFilter} onClick={() => cleanerState()}>Limpar Filtro</button>
              </div>
            </form>
          </div>
          
          <div id={styles.bannerTwo} className={styles.bannerTwoInternacional}>
            <div id={styles.bgBannerTwo}>
              <div id={styles.contentBannerTwo}>
                <h3 id={styles.titleBannerTwo}>Anuncie sua empresa com a gente!</h3>
                <div id={styles.boxDescriptionTwo}>
                  <p className={styles.descriptionTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                  <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por milhares de pessoas POR DIAA!</p>
                  <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                </div>
                <a id={styles.btnWantBanner} href="mailto:mailto:homeofficevagas77@gmail.com">Quero este Banner</a>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.sectionCards}>
          {vagasMostradas ? vagasMostradas.length > 0 ? vagasMostradas.map((card, index) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.boxTitle}>
                  <h2 className={styles.title}>{card.tituloDaVaga}</h2>
                  <h3 className={styles.remuneration}>{card.salario}/{card.tipoDeTrabalho}</h3>
              </div>
              <div className={styles.boxDescription}>
                  <p className={styles.descriptionJob}>{card.descricaoDaVaga}</p>
              </div>
              <div className={styles.boxAboutJob}>
                  <Link className={styles.showJob} href={`/vagas-internacionais/${card.id}`} >Verificar Vaga</Link>
                  <ul className={styles.unList}>
                    <li className={styles.tags}>{card.tags.habilidades[0]}</li>
                    <li className={styles.tags}>{card.tags.habilidades[1]}</li>
                    <li className={styles.tags}>{card.tags?.habilidades[2]}</li>
                    <li className={styles.tags}>{card.tags?.habilidades[3]}</li>
                    <li className={styles.tags}>{card.horarioDeCriacao}</li>
                  </ul>
              </div>
            </div>
            )) : <p id={styles.responseByFilter}>Não a resultado para esta pesquisa.</p>: <p id={styles.loading}>Carregando vagas...</p>}
          {/* BOTAO ANTIGO PARA MOSTRAR MAIS VAGAS */}
          {vagasMostradas && vagasMostradas.length > 0 ? <button id={styles.btnShowMoreJobs} onClick={mostrarMaisNomes}>Mostrar Mais</button> : <p></p>}
        </div>
      </main>

      <div id={styles.advertising} className={styles.bannerTreeInternacional}>
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

      <div id={styles.blogSection}>
        <div>
          <h2 id={styles.titleMainBlog}>Noticias do nosso Blog</h2>
        </div>
        <div id={styles.contentBlog}>
          <div className={styles.boxBlog}>
            <Link href="https://oantagonista.com.br/brasil/emprego-formal-no-brasil-crescimento-recorde-em-2024-impulsiona-economia/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Emprego formal no Brasil: crescimento recorde em 2024 impulsiona economia</h3>
              <p className={styles.descriptionBlog}>Dados divulgados pelo Ministério do Trabalho e Emprego revelam que o país experimentou um aumento significativo na geração de empregos formais.</p>
              <h6 className={styles.dateBlog}>21 de Março de 2024</h6>
            </Link>
            <Link href="https://g1.globo.com/economia/noticia/2024/04/30/brasil-cria-2443-mil-empregos-formais-em-marco-com-aumento-de-257percent.ghtml" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Brasil cria 244,3 mil empregos formais em março; aumento é de 25,7%</h3>
              <p className={styles.descriptionBlog}>Dados do Cadastro Geral de Empregados e Desempregados foram divulgados pelo Ministério do Trabalho. No primeiro trimestre deste ano, 719 mil vagas com carteira assinada foram criadas, alta de 33,9% em relação a 2023.</p>
              <h6 className={styles.dateBlog}>30 de Abril de 2024</h6>
            </Link>
          </div>
          <div className={styles.boxBlog}>
            <Link href="https://www.serasaexperian.com.br/carreiras/blog-carreiras/como-se-preparar-para-uma-entrevista-de-emprego/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>13 dicas de como se preparar para uma entrevista de emprego</h3>
              <p className={styles.descriptionBlog}>O comportamento é um dos itens analisados durante uma entrevista de emprego e tem papel fundamental para decidir se a pessoa vai conseguir a vaga ou não.</p>
              <h6 className={styles.dateBlog}>09 de Maio de 2023</h6>
            </Link>
            <Link href="https://forbes.com.br/carreira/2023/12/o-futuro-do-trabalho-chegou-16-tendencias-para-2024/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>O futuro do trabalho chegou: 16 tendências para 2024</h3>
              <p className={styles.descriptionBlog}>De áreas mais promissoras a habilidades em alta demanda, veja o que esperar do mercado e esteja à frente das movimentações</p>
              <h6 className={styles.dateBlog}>23 de Dezembro de 2023</h6>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}

