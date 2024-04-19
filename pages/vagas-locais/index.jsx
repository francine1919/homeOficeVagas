import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/vagas.module.scss";

import axios from "axios";
import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByJobs } from "@/redux/searchJobs/searchJobsSlice";
import Link from "next/link";

export default function VagasLocais() {
  const [nameJobChoice, setNameJobChoice] = useState();
  const [cityChoice, setCityChoice] = useState(); 
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
      url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/international/false',
      headers: {
        'X-Custom-Jobs': 'my-secret-endpoint-1@@89',
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
      if(cityChoice){
        const filterCityChoice = await jobs.filter((item) => cityChoice === item.cidade)
        setVagasMostradas(filterCityChoice)
      }
      if(nameJobChoice && cityChoice){
        const filterJobAndCity = await jobs.filter((item) => nameJobChoice === item.tituloDaVaga && cityChoice === item.cidade)
        setVagasMostradas(filterJobAndCity)
      }
    } catch (error) {
      return null
    }
  }
  
  function putOnState(e){
    e.preventDefault()
    showJobOrJobFilter()
    dispatch(searchByJobs({nameJobChoice, cityChoice}))
  } 

  function cleanerState(){
    setNameJobChoice("")
    setCityChoice("")

    const minClean = 0;
    const maxClean = 5;
    setVagasMostradas(jobs.slice(minClean, maxClean))
    
    dispatch(searchByJobs({nameJobChoice, cityChoice}))
  } 

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(() => {
    if(!jobs){
      setMessage("estamos carregando suas vagas...")
    }else{
      setVagasMostradas(jobs.slice(minLimit, maxLimit));
    }
  }, [jobs, minLimit, maxLimit]);

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
            {/* FORM NOVO ABAIXO */}
            <form id={styles.formFilter} onSubmit={putOnState}>
              <div id={styles.boxMainForm}>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Vaga</label>
                  <input className={styles.entrysFilter} value={nameJobChoice} onChange={(e) => setNameJobChoice(e.target.value)} type="text" />
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Pesquisar por Cidade</label>
                  <input className={styles.entrysFilter} value={cityChoice} onChange={(e) => setCityChoice(e.target.value)} type="text" placeholder="Ex: Sao Paulo"/>
                </div>
              </div>
              <div id={styles.boxButtonsFilter}>
                <button id={styles.btnFilter}>Filtrar</button>
                <button id={styles.btnCleanFilter} onClick={() => cleanerState()}>Limpar Filtro</button>
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
                <a id={styles.btnWantBanner} href="homeofficevagas77@gmail.com">Quero este Banner</a>
              </div>
            </div>
          </div>
        </div>

        <div id={styles.sectionCards}>
          {vagasMostradas ? vagasMostradas.length > 0 ? vagasMostradas.map((card, index) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.boxTitle}>
                  <h2 className={styles.title}>{card.tituloDaVaga}</h2>
                  <h3 className={styles.remuneration}>{card.formaDeRemuneracao}</h3>
              </div>
              <div className={styles.boxDescription}>
                  <p className={styles.descriptionJob}>{card.descricaoDaVaga}</p>
              </div>
              <div className={styles.boxAboutJob}>
                  <Link className={styles.showJob} href={`/vagas-locais/${card.id}`} >Verificar Vaga</Link>
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

      <div id={styles.advertising} className={styles.bannerTreeLocal}>
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
