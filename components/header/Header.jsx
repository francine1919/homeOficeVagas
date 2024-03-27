import styles from "./Header.module.scss";

import logoHeader from "../../public/logos/logo-tres-copia.png";
import menuHamburguer from "../../public/icons/menu_hamburguer.png";
import sairMenuCelular from "@/public/icons/x_icon.png";

import Image from "next/image";
import Link from "next/link";

import { robotoFlex } from "@/fonts/font";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";

import { useState } from "react";
import { newSearch } from "@/redux/searchHome/searchHomeSlice";

export default function Header() {
  const [searchInput, setSearchInput] = useState();

  const dispatch = useDispatch()
  const router = useRouter()

  function goSearchPage(){
    dispatch(newSearch({searchInput}))

    router.push("/pesquisa")
  }

  function openModal(){
    let menu = document.querySelector(".boxMenuCell");
    menu.style.display = "block";
  }

  function closeModal(){
    let iconSair = document.querySelector(".boxMenuCell");
    iconSair.style.display = "none";
  }

  return (
    <header id={styles.headerMainPage} className={robotoFlex.className}>
      <Link href="/"><Image id={styles.logo} src={logoHeader} alt="Home Office Vagas"/></Link>
      <div id={styles.secondSection}>
        <nav>
          <ul id={styles.unOrdenedList}>
            <li> 
              <Link id={`${router.pathname === "/" ? styles.teste : null}`} className={styles.links} href="/">Home</Link>
            </li>
            <li>
              <Link id={`${router.pathname === "/vagas-internacionais" ? styles.teste : null}`} className={styles.links} href="/vagas-internacionais">Vagas Internacionais</Link>
            </li>
            <li>
              <Link id={`${router.pathname === "/vagas-locais" ? styles.teste : null}`} className={styles.links} href="/vagas-locais">Vagas Locais</Link>
            </li>
            <li>
              <Link id={`${router.pathname === "/blog" ? styles.teste : null}`} className={styles.links} href="/blog">Blog</Link>
            </li>
            <li>
              <Link id={`${router.pathname === "/contatos" ? styles.teste : null}`} className={styles.links} href="/contatos">Contatos</Link>
            </li>
          </ul>
        </nav>
        <div id={styles.boxSearch}>
          <input id={styles.entrySearch} onChange={(e) => setSearchInput(e.target.value)} type="search" placeholder="Pesquise aqui" required/>
          <button onClick={() => goSearchPage()} id={styles.btnSearch}>Pesquisar</button>
        </div>
      </div>
      <Image onClick={() => openModal()} className="menuHamburger" id={styles.logoMenuHamburguer} src={menuHamburguer} alt="Logo do Menu Hamburguer" />
      
      {/* ATENCAO, A PARTIR DAQUI PRA BAIXO, ESTA SESSAO SÓ TEM EM CELULARES */}  
      
      <div className="boxMenuCell" id={styles.boxMenuCell}>
        <nav id={styles.menuCellphone}>
          <Link className={styles.linksCellphone} href="/">Home</Link>
          <Link className={styles.linksCellphone} href="/vagas-internacionais">Vagas Internacionais</Link>
          <Link className={styles.linksCellphone} href="/vagas-locais">Vagas Locais</Link>
          <Link className={styles.linksCellphone} href="/blog">Blog</Link>
          <Link className={styles.linksCellphone} href="/contatos">Contatos</Link>
        </nav>
        <div id={styles.boxSairCelular}>
          <Image onClick={() => closeModal()} id={styles.sairMenuCelular} src={sairMenuCelular} alt='Sair' />
        </div>
      </div>
    </header>
  )
}
