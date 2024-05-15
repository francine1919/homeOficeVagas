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
      if(cityChoice){
        const filterCityChoice = await jobs.filter((item) => cityChoice.toLowerCase() === item.cidade.toLowerCase())
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
      <Head>
        <title>Vagas Locais - Home Office Vagas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encontre oportunidades de emprego local no Home Office Vagas. Vagas disponíveis em todas as regiões e estados do Brasil." />
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Vagas Locais - Home Office Vagas" />
        <meta property="og:description" content="Encontre oportunidades de emprego local no Home Office Vagas. Vagas disponíveis em todas as regiões e estados do Brasil." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficevagas.com.br/vagas-locais" />
        <meta property="og:type" content="article" />
        <meta name="keywords" content="vagas locais, emprego local, Brasil, oportunidades de emprego, regiões, estados" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="Equipe Home Office Vagas" />
        <link rel="canonical" href="https://homeofficevagas.com.br/vagas-locais" />

        <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
      </Head>

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
                  <input className={styles.entrysFilter} value={cityChoice} onChange={(e) => setCityChoice(e.target.value)} type="text" placeholder="Ex: são paulo"/>
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
                  <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por milhares de pessoas POR DIAA!</p>
                  <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                </div>
                <a id={styles.btnWantBanner} href="mailto:homeofficevagas77@gmail.com">Quero este Banner</a>
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
            <Link href="https://exame.com/carreira/guia-de-carreira/carta-de-apresentacao-como-fazer-e-modelos/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Veja como fazer uma carta de apresentação: como fazer e modelos</h3>
              <p className={styles.descriptionBlog}>A importância da carta de apresentação transcende a mera formalidade. Ela pode ser um documento importante para desbloquear oportunidades tanto no cenário profissional quanto acadêmico.</p>
              <h6 className={styles.dateBlog}>29 de Dezembro de 2023</h6>
            </Link>
            <Link href="https://blog.solides.com.br/entrevista-de-emprego-candidatos/?utm_medium=paid&utm_source=adwords&utm_term=&utm_campaign=Google_Pesquisa_RDD_lead_blog_BR&hsa_acc=5023217460&hsa_cam=12550667912&hsa_grp=129846598923&hsa_ad=694567306310&hsa_src=g&hsa_tgt=dsa-1466823538259&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAjwupGyBhBBEiwA0UcqaPU9ZYfCTvbdhHzXwC4naC-coMEOw6yAz_h2sOvc-Yc_b_Txe7NbEhoCx1kQAvD_BwE" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Entrevista de emprego: como se preparar e as principais perguntas dos recrutadores</h3>
              <p className={styles.descriptionBlog}>Para que serve uma entrevista de emprego? Ela representa a oportunidade de estabelecer contato direto com a pessoa responsável por identificar o perfil mais adequado à vaga. </p>
              <h6 className={styles.dateBlog}>07 de Julho de 2023</h6>
            </Link>
          </div>
          <div className={styles.boxBlog}>
            <Link href="https://www.linkedin.com/pulse/guia-pr%C3%A1tico-para-melhorar-seu-perfil-linkedin-vitor-guimar%C3%A3es/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Guia Prático para Melhorar seu Perfil no LinkedIn</h3>
              <p className={styles.descriptionBlog}>Veja neste artigo como voce pode melhorar o seu Linkedin e sair na frente de muitas pessoas com Vitor Guimarães.</p>
              <h6 className={styles.dateBlog}>31 de Agosto de 2021</h6>
            </Link>
            <Link href="https://blog.manpowergroup.com.br/soft-skills-mais-buscadas-pelas-empresas" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Conheça as 7 soft skills mais buscadas pelas empresas</h3>
              <p className={styles.descriptionBlog}>Em um mercado de trabalho em constante evolução, como o que vivenciamos atualmente, o desenvolvimento de habilidades técnicas é fundamental para o sucesso em todas as carreiras profissionais.</p>
              <h6 className={styles.dateBlog}>14 de Setembro de 2024</h6>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
