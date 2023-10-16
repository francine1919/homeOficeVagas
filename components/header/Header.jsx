import styles from "./Header.module.scss";

import logoHeader from "../../public/imgs/logo-tres-copia.png"
import lupa from "../../public/icons/lupa.png"

import Image from "next/image";
import Link from "next/link";

import { robotoFlex } from "@/fonts/font";

export default function Header() {
  return (
    <header id={styles.headerMainPage} className={robotoFlex.className}>
      <Image src={logoHeader} alt="Home Office Vagas" width={300}/>
      <div id={styles.segundaSessao}>
        <nav>
            <ul id={styles.listaNaoOrdenada}>
                <li>
                    <Link className={styles.links} href="/vagas-internacionais">Vagas Internacionais</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/vagas-locais">Vagas Locais</Link>
                </li>
                <li>
                    <Link className={styles.links} href="/contatos">Contatos</Link>
                </li>
            </ul>
        </nav>
        <div id={styles.boxPesquisa}>
            <button id={styles.btnPesquisa}>
                <Image src={lupa} width={20} height={20}/>
            </button>
            <input id={styles.entradaPesquisa} type="search" placeholder="Pesquise algo"/>
        </div>
      </div>
    </header>
  )
}
