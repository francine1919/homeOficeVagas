import Link from "next/link.js";

import styles from "./CardJobs.module.scss";

import axios from "axios";
import { useEffect, useState } from "react";

export default function CardJobs({jobChoose, countrySelect, cityChoose, statusButtonFilter, statusButtonCleanFilter}) {
  const [jobList, setJobList] = useState("");
  const [cardsFiltrado, setCardsFiltrados] = useState()

  async function getJobs(){
    /* ATENCAO: ESTE TRECHO DE CODIGO, SO RODA EM DESENVOLVIMENTO, O DE BAIXO APENAS EM PRODUÇÃO */
    await axios.get(`http://localhost:3000/api/vagas`)
    .then((response) => {
      setJobList(response.data.dataCards)
    })
    .catch((error) => {
      console.log("Deu errado a requisicao que pede WINDOW=TRUE e LOCALHOST:3000")
    })
    
    /* await axios.get(`https://${window.location.host}/api/vagas`)
    .then((response) => {
      setJobList(response.data.dataCards)
    })
    .catch((error) => {
      console.log("Requisição em produção deu errado")
    }) */
  }

  async function showJobOrJobFilter(){
    try {
      if(statusButtonCleanFilter && !jobChoose && !countrySelect && !cityChoose){
        const allCards = await jobList.map((item) => item)
        console.log("Cards:", allCards)
        setCardsFiltrados(allCards)
      }
      if(jobChoose){
        const filterChoose = await jobList.filter((item) => jobChoose.toLowerCase() === item.tituloDaVaga.toLowerCase())
        console.log("Filter Choose:", filterChoose)
        setCardsFiltrados(filterChoose)
      }
      if(countrySelect){
        const filterCountrySelect = await jobList.filter((item) => countrySelect === item.pais)
        console.log("Filter Country Select:", filterCountrySelect)
        setCardsFiltrados(filterCountrySelect)
      }
      if(jobChoose && countrySelect){
        const filterJobAndCountry = await jobList.filter((item) => jobChoose === item.tituloDaVaga && countrySelect === item.pais)
        console.log("Filter Jobs and Country:", filterJobAndCountry)
        setCardsFiltrados(filterJobAndCountry)
      }
      if(countrySelect && cityChoose){
        const filterCountryAndCity = await jobList.filter((item) => countrySelect === item.pais && cityChoose === item.cidade)
        console.log("Filter Country and city:", filterCountryAndCity)
        setCardsFiltrados(filterCountryAndCity)
      }
      if(jobChoose && countrySelect && cityChoose){
        const filterCard = await jobList.filter((item) => jobChoose.toLowerCase() === item.tituloDaVaga.toLowerCase() && countrySelect === item.pais && cityChoose === item.cidade)
        console.log("Filtro completo:", filterCard)
        setCardsFiltrados(filterCard)
      }
    } catch (error) {
      console.log("erro do catch", error.message)
    }
  }

  useEffect(() => {
    getJobs()
  }, [])

  useEffect(() => {
    showJobOrJobFilter()
  }, [statusButtonFilter])

  return (
    <div>
        {cardsFiltrado ? cardsFiltrado.map((card) =>
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
        ) : jobList ? jobList.map((card) =>
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
    ) : <div id={styles.loadingJobs}>carregando vagas...</div>}
    </div>
  )
}
