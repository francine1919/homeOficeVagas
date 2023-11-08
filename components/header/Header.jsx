import styles from "./Header.module.scss";

import logoHeader from "../../public/logos/logo-tres-copia.png"

import Image from "next/image";
import Link from "next/link";

import { robotoFlex } from "@/fonts/font";

export default function Header() {
  return (
    <header id={styles.headerMainPage} className={robotoFlex.className}>
      <Image id={styles.logo} src={logoHeader} alt="Home Office Vagas" width={300}/>
      <div id={styles.segundaSessao}>
        <nav>
            <ul id={styles.unOrdenedList}>
                <li>
                    <Link id={styles.teste} className={styles.links} href="/">Home</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/vagas-internacionais">Vagas Internacionais</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/vagas-locais">Vagas Locais</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/blog">Blog</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/contatos">Contatos</Link>
                </li>
            </ul>
        </nav>
        <div id={styles.boxSearch}>
          <input id={styles.entrySearch} type="search" placeholder="Pesquise aqui"/>
          <button id={styles.btnSearch}>Pesquisar</button>
        </div>
      </div>
    </header>
  )
}
