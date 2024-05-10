import Head from 'next/head';
import Image from 'next/image';

import styles from "@/styles/index.module.scss";

import logoMain from "@/public/logos/logo-um.png";
import arrowRight from "@/public/icons/arrow_right_white.png"

import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

import { robotoFlex } from '@/fonts/font';

import { useDispatch, useSelector } from 'react-redux';

import { dataJobs } from "@/redux/dataMain/dataMainSlice";
import { newSearch } from "@/redux/searchHome/searchHomeSlice";

import { useEffect, useState } from 'react';

import axios from 'axios';

import { Router, useRouter } from 'next/router';

export default function Home() {
  const [nameJob, setNameJob] = useState();
  const [countrys, setCountrys] = useState();
  const [citys, setCitys] = useState();
  const [dataLocal, setDataLocal] = useState();

  const [countrySelect , setCountrySelect] = useState();
  const [citySelect , setCitySelect] = useState();
  
  const dispatch = useDispatch();
  const router = useRouter();

  async function handleJobs(){
    const configApi = {
      method: 'get',
      url: 'https://home-office-jobs-6a2f088fb390.herokuapp.com/job/offers',
      headers: {
        'X-Custom-Jobs': process.env.NEXT_PUBLIC_VALUE_API
      }
    }
    
    axios(configApi)
    .then((response) => {
      dispatch(dataJobs(response.data))
      const data = response.data.map((item) => ({
        pais: item.pais,
        cidade: item.cidade
      }))
      const dataCountrys = data.map((item) => item.pais)

      setDataLocal(data)
      setCountrys([...new Set(dataCountrys)])
    })
    .catch((error) => {
      return null
    })
  }

  async function handleCitys(){
    if(!countrys){
      return null
    }else{
      const citys = dataLocal.filter((item) => item.pais === countrySelect)

      setCitys(citys)
    }
  }

  function sendDataFilter(e){
    e.preventDefault()
    dispatch(newSearch({
        title: nameJob,
        country: countrySelect,
        city: citySelect
      }
    ))
    router.push("/vaga-filtrada")
  }

  function goPageSearch(pais, cidade){
    dispatch(newSearch({
      title: '',
      country: pais,
      city: cidade
    }))

    router.push('/vaga-filtrada');
  }

  useEffect(() => { 
    handleJobs()
  }, [])

  useEffect(() => { 
    handleCitys()
  }, [countrySelect])

  return (
    <div className={robotoFlex.className}>
      <Head>
        <title>Home Office Vagas - Encontre sua vaga Home Office aqui!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content="Na Home Office Vagas, você encontra sua vaga Home Office num piscar de olhos. Busque suas vagas aqui!"/>
        <meta property="og:site_name" content="Home Office Vagas" />
        <meta property="og:title" content="Home Office Vagas - Encontre sua vaga Home Office aqui!" />
        <meta property="og:description" content="Na Home Office Vagas, você encontra sua vaga Home Office num piscar de olhos. Busque suas vagas aqui!" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:url" content="https://homeofficevagas.com.br/" />
        <meta property="og:type" content="website" />
        <meta name="keywords" content="vagas home office, emprego, trabalho remoto, vagas internacionais, vagas locais" />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="author" content="WEBTECH - Soluções em Tecnologia" />
        <link rel="canonical" href="https://homeofficevagas.com.br/" />
      </Head>

      <Header/>
      <div id={styles.mainPage}>
        <div id={styles.content}>
          <main id={styles.mainContent}>
            <div id={styles.tituloPrincipal}>
              <div>
                <Image id={styles.fotoLogoMain} src={logoMain} alt="Logo HomeOfficeVagas" height={200} width={200} />
              </div>
              <div id={styles.titulo}>
                <h1 id={styles.tituloDaPagina}>Na Home Office Vagas, você encontra sua vaga Home Office num piscar de olhos.</h1>
                <p id={styles.textoDoTitulo}>Venha conseguir o seu emprego com a gente!</p>
              </div>
              <Image id={styles.fotoSetaaDireita} src={arrowRight} alt="seta a direita" width={200} />
            </div>
            <div id={styles.boxSearch}>
              <h2 id={styles.tituloForm}>Busque suas vagas aqui!</h2>
              <form id={styles.formPesquisa} onSubmit={sendDataFilter} action="#">
                <input className={styles.entradasForm} onChange={(e) => setNameJob(e.target.value)} type="text" placeholder="Busque por Titulo" />
                <select className={styles.entradasForm} onChange={(e) => setCountrySelect(e.target.value)}>
                  {countrys ? <>
                    <option disabled>Países carregados</option>
                    {countrys.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </> : <option>Carregando países...</option>}
                </select>
                <select className={styles.entradasForm} onChange={(e) => setCitySelect(e.target.value)} value={citySelect}>
                  {citys ? <>
                    <option>Escolha uma cidade</option>
                    {citys.map((item) => (
                      <option key={item.id}>{item.cidade}</option>
                    ))}
                  </> : <option>Escolha um país...</option>}
                </select>
                <button id={styles.btnBuscar}>Buscar</button>
              </form>
            </div>
          </main>
          <nav id={styles.navigationCountrys}>
            <a className={styles.countrys} onClick={() => goPageSearch("Brasil","Rio de Janeiro")}>Rio de Janeiro</a>
            <a className={styles.countrys} onClick={() => goPageSearch("United States","Los Angeles")}>Los Angeles</a>
            <a className={styles.countrys} onClick={() => goPageSearch("Brasil","Curitiba")}>Curitiba</a>
            <a className={styles.countrys} onClick={() => goPageSearch("United States","Seattle")}>Seattle</a>
            <a className={styles.countrys} onClick={() => goPageSearch("Germany","Munich")}>Munich</a>
            <a className={styles.countrys} onClick={() => goPageSearch("United States","Chicago")}>Chicago</a>
            <a className={styles.countrys} onClick={() => goPageSearch("Uruguai","Montevideo")}>Montevideu</a>
            <a className={styles.countrys} onClick={() => goPageSearch("United Kingdom","Manchester")}>Manchester</a>
            <a className={styles.countrys} onClick={() => goPageSearch("Australia","Sydney")}>Sydney</a>
          </nav>
          <Footer/>
        </div>
      </div>
    </div>
  )
}
