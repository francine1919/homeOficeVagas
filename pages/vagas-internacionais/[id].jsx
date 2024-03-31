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

export default function DetalhesVagasInternacionais(){
    const [job, setJob] = useState();

  const { query } = useRouter();
  const userId = query.id;

  async function showJob() {
    const configApi = {
      method: 'get',
      url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/offers',
      headers: {
        'X-Custom-Jobs': 'my-secret-endpoint-1@@89'
      }
    }
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

    return(
        <div className={`${robotoFlex.className} ${styles.vagaEscolhida}`}>
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
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Descrição</h2>
                    <p className={styles.descriptionJob}>{job[0].descricaoDaVaga}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Requisitos</h2>
                    <p className={styles.descriptionJob}>{job[0].requisitos}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Escolaridade</h2>
                    <p className={styles.descriptionJob}>{job[0].escolaridadeMinima}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Curso Superior</h2>
                    <p className={styles.descriptionJob}>{job[0].cursoSuperior}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Jornada De Trabalho</h2>
                    <p className={styles.descriptionJob}>{job[0].jornadaDeTrabalho}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Beneficios</h2>
                    <p className={styles.descriptionJob}>{job[0].beneficios}</p>
                  </div>
                  <div className={styles.boxJob}>
                    <h2 className={styles.titleJob}>Horário de Trabalho</h2>
                    <p className={styles.descriptionJob}>{job[0].horarioDoTrabalho}</p>
                  </div>
                </div>
                <div id={styles.boxButtons}>
                  <Link id={styles.btnSendCurriculum} href="/">Enviar Curriculo</Link>
                  <Link id={styles.btnSendProblem} href="/">Relatar Problema</Link>
                </div>
              </div>
              <div id={styles.bannerTwo}>
                <div id={styles.bgBannerTwo}>
                  <div id={styles.bannerTwoContent}>
                    <h3 id={styles.titleBannerTwo}>Anuncie a sua empresa com a gente!</h3>
                    <div id={styles.boxDescriptionBannerTwo}>
                      <p className={styles.descriptionBannerTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                      <p className={styles.descriptionBannerTwo}>Aqui a sua empresa será vista por mais de 2.000 mil pessoas POR DIAA!</p>
                      <p className={styles.descriptionBannerTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                    </div>
                    <Link id={styles.btnBannerTwo} href="/contatos">Quero este Banner</Link>
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
                    <p id={styles.descriptionBannerTree}>Aqui o seu anuncio é visto por mais de 2.000 pessoas todos os dias. Venha ser visto, a sua empresa precisa disso.</p>
                  </div>
                  <Link id={styles.btnBannerTree} href="/">Quero este banner</Link>
                </div>
              </div>
            </div>
            <Footer/>
        </div>
    )
}