import Header from "@/components/header/Header";
import styles from "@/components/cardJobs/CardJobs.module.scss";
import axios from "axios";
import { robotoFlex } from "@/fonts/font";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchByJobs } from "@/redux/searchJobs/searchJobsSlice";
import Link from "next/link";

export default function Blog() {
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
    /* const config = {
      method: 'get',
      url: "https://home-office-jobs-6a2f088fb390.herokuapp.com/job/offers",
      headers: {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0ZmExYjRhLTk2OWEtNDIyMS1hNGVhLTljMmU0ZThkYjU1YyIsImlhdCI6MTcwODk2MzYyOCwiZXhwIjoxNzA5MDUwMDI4fQ.9E4NZTAEAJoPl7uaCGT3pL_gxXnW7oTYmiPF1zWwZ8c',
        'Content-Type': 'application/json',  // Pode variar dependendo da API que você está acessando
      },
    }; */

    axios.get("http://localhost:3000/api/vagas")
    .then((response) => {
      setJobs(response.data.dataCards)

      const countrys = response.data.dataCards.map((item) => item.pais)
      setDataCountrys([...new Set(countrys)]);
    }).catch((error) => {
      setJobs(error.message)
    }) 
  }

  async function showJobOrJobFilter(){
    try {
      if(nameJobChoice){
        const filterNameJobChoose = await jobs.filter((item) => nameJobChoice.toLowerCase() === item.tituloDaVaga.toLowerCase())
        console.log("Filter Choose:", filterNameJobChoose.length)
        setVagasMostradas(filterNameJobChoose)
      }
      if(countryChoice){
        const filterCountryChoice = await jobs.filter((item) => countryChoice === item.pais)
        console.log("Filter Country Select:", filterCountryChoice)
        setVagasMostradas(filterCountryChoice)
      }
      if(nameJobChoice && countryChoice){
        const filterJobAndCountry = await jobs.filter((item) => nameJobChoice === item.tituloDaVaga && countryChoice === item.pais)
        console.log("Filter Jobs and Country:", filterJobAndCountry)
        setVagasMostradas(filterJobAndCountry)
      }
      if(countryChoice && cityChoice){
        const filterCountryAndCity = await jobs.filter((item) => countryChoice === item.pais && cityChoice === item.cidade)
        console.log("Filter Country and city:", filterCountryAndCity)
        setVagasMostradas(filterCountryAndCity)
      }
      if(nameJobChoice && countryChoice && cityChoice){
        const completeFilter = await jobs.filter((item) => nameJobChoice.toLowerCase() === item.tituloDaVaga.toLowerCase() && countryChoice === item.pais && cityChoice === item.cidade)
        console.log("Filtro completo:", completeFilter)
        setVagasMostradas(completeFilter)
      }
    } catch (error) {
      console.log("erro do catch", error.message)
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

  console.log("Vagas mostradas", vagasMostradas)

  return (
    <div id={styles.pageBlog} className={robotoFlex.className}>
      <Header/> 
      <ul>

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
          </div>)) : <p>Não a resultado para a pesquisa oferecida</p> : <p>Carregando...</p>}
      </ul>

      <button onClick={mostrarMaisNomes}>Mostrar Mais</button>
    </div>
  )
}