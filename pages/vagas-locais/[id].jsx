import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import axios from "axios";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import styles from "@/styles/verificarVaga.module.scss";
import Link from "next/link";

import CircularProgress from '@mui/material/CircularProgress';

import { robotoFlex } from "@/fonts/font";

import 'animate.css';
import Head from "next/head";

export default function DetalhesVagaInternacionais() {
  const [job, setJob] = useState();
  const [modalIsOnline, setModalIsOnline] = useState(false);

  const abreModal = () => setModalIsOnline(true);
  const fechaModal = () => setModalIsOnline(false);

  const { query } = useRouter();
  const userId = query.id;

  async function showJob() {
    const configApi = {
      method: 'get',
      url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/offers',
      headers: {
        'X-Custom-Jobs': process.env.NEXT_PUBLIC_VALUE_API
      }
    }
    /* ATENÇÃO: este trecho de código só roda em desenvolvimento, o de baixo apenas em produção. */
    axios(configApi)
    .then((response) => {
      const jobFilter = response.data.filter((item) => item.id == userId)
      setJob(jobFilter);
    })
    .catch((error) => {
      return null
    });
  }
    
  useEffect(() => {
    showJob();
  }, [userId]);

  return (
    <div className={`${robotoFlex.className} ${styles.vagaEscolhida}`}>
      <Head>
        <title>Vagas de Emprego em [cidade] - [Nome da Empresa]</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Encontre as melhores vagas de emprego em [Localização] na [Nome da Empresa]. Candidate-se hoje mesmo para oportunidades de carreira emocionantes." />
        <meta property="og:site_name" content="[Nome da Empresa]" />
        <meta property="og:title" content="Vagas de Emprego em [Localização] - [Nome da Empresa]" />
        <meta property="og:description" content="Encontre as melhores vagas de emprego em [Localização] na [Nome da Empresa]. Candidate-se hoje mesmo para oportunidades de carreira emocionantes." />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content={`https://homeofficevagas.com.br/vagas-locais/${userId}`} />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="vagas de emprego, [Localização], carreira, [Indústria ou Área de Atuação], [Habilidades ou Competências]" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="[Nome da Empresa]" />
        <link rel="canonical" href={`https://homeofficevagas.com.br/vagas-locais/${userId}`} />

        <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
      </Head>

      <Header/>

      {job && job.length > 0 ? (
      <div>

      <div id={styles.bannerOne}>
        <div id={styles.bgBanner}> 
          <div id={styles.bannerContent}>
            <h1 id={styles.titleBanner}>{job[0].tituloDaVaga}</h1>
            <p id={styles.descriptionBanner}>{job[0].descricaoDoBanner}</p>
          </div>
        </div>
      </div>

      <main id={styles.jobSection}>
        <div id={styles.sectionInfoJob}>
          <div className={styles.boxJob}>
            <h2 id={styles.titleMain}>{job[0].tituloDaVaga}</h2>
          </div>
          <div id={styles.allOfJob}>
          {job[0].descricaoDaVaga ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Descrição</h2>
                  <p className={styles.descriptionJob}>{job[0].descricaoDaVaga}</p>
                </div> : null }
                {job[0].requisitos ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Requisitos</h2>
                  <p className={styles.descriptionJob}>{job[0].requisitos}</p>
                </div> : null }
                {job[0].escolaridadeMinima ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Escolaridade</h2>
                  <p className={styles.descriptionJob}>{job[0].escolaridadeMinima}</p>
                </div> : null }
                {job[0].cursoSuperior ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Curso Superior</h2>
                  <p className={styles.descriptionJob}>{job[0].cursoSuperior}</p>
                </div> : null }
                {job[0].jornadaDeTrabalho ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Jornada De Trabalho</h2>
                  <p className={styles.descriptionJob}>{job[0].jornadaDeTrabalho}</p>
                </div> : null }
                {job[0].beneficios ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Beneficios</h2>
                  <p className={styles.descriptionJob}>{job[0].beneficios}</p>
                </div> : null }
                {job[0].horarioDoTrabalho ? 
                <div className={styles.boxJob}>
                  <h2 className={styles.titleJob}>Horário de Trabalho</h2>
                  <p className={styles.descriptionJob}>{job[0].horarioDoTrabalho}</p>
                </div> : null}
          </div>
          <div id={styles.boxButtons}>
            {job[0].email.includes("@") ? <button id={styles.btnShowEmail} onClick={() => abreModal()}>Visualizar email</button> : <Link id={styles.btnSendCurriculum} href={job[0].email}>Enviar Curriculo</Link>}
            <Link id={styles.btnSendProblem} href="/contatos">Relatar Problema</Link>
          </div>
        </div>

        {/* MODAL */}
        {modalIsOnline ? (
          <div id={styles.modal}>
            <h4 id={styles.titleModal}>Olá, querido usuário</h4>
            <p id={styles.descriptionModal}>Para se candidatar para esta vaga, você deve enviar o seu curriculo para o email abaixo. Boa sorte!</p>
            <h4 id={styles.emailModal}>{job[0].email}</h4>
            <button id={styles.okButtonModal} onClick={() => fechaModal()}>certo, entendido</button>
          </div>
        ) : null}
        {/* MODAL */}
        
        <div id={styles.bannerTwo}>
          <div id={styles.bgBannerTwo}>
            <div id={styles.bannerTwoContent}>
              <h3 id={styles.titleBannerTwo}>Anuncie a sua empresa com a gente!</h3>
              <div id={styles.boxDescriptionBannerTwo}>
                <p className={styles.descriptionBannerTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                <p className={styles.descriptionBannerTwo}>Aqui a sua empresa será vista por milhares de pessoas POR DIAA!</p>
                <p className={styles.descriptionBannerTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
              </div>
              <a id={styles.btnBannerTwo} href="https://api.whatsapp.com/send?phone=5561982434868&text=Olá, vim do site Home Office Vagas e tenho interesse em anunciar nos Banners do site de voces!">Quero este Banner</a>
            </div>
          </div>
        </div>
      </main>

      </div>
      ) : (<div id={styles.boxLoading} className="animate__animated animate__backInLeft">
        <CircularProgress/>
        <h1 id={styles.titleLoading}>Aguarde... estamos carregando as informações da vaga selecionada.</h1>
      </div>)}

      <div id={styles.bannerTree}>
        <div id={styles.bgBannerTree}>
          <div id={styles.contentBannerTree}>
            <div>
              <h2 id={styles.titleBannerTree}>Anuncie sua empresa neste Banner!</h2>
              <p id={styles.descriptionBannerTree}>Destaque sua empresa, alcance visibilidade constante. Seja notado por todos os clientes em potencial!</p>
            </div>
            <a id={styles.btnBannerTree} href="https://api.whatsapp.com/send?phone=5561982434868&text=Olá, vim do site Home Office Vagas e tenho interesse em anunciar nos Banners do site de voces!">Quero este banner</a>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
