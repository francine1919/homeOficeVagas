import CardJobs from "@/components/cardJobs/CardJobs";

import Header from "@/components/header/Header";

import Link from "next/link";
import Image from "next/image";

import styles from "@/styles/vagas-locais.module.scss";
import { robotoFlex } from "@/fonts/font";

import logoWebtech from "@/public/logos/logo_webtech.jpeg"
import Footer from "@/components/footer/Footer";

export default function VagasLocais() {
  return (
    <div id={styles.vagasLocais} className={robotoFlex.className}>
      <Header/>

      <form id={styles.filterForm} method="post">
        <div id={styles.boxForm}>
          <div>
            <input value="Vaga" id={styles.entryJob} type="text"/>
          </div>
          <div>
            <select className={styles.entrySelect}>
              <option value="">País</option>
            </select>
          </div>
          <div>
            <select className={styles.entrySelect}>
              <option value="">Cidade</option>
            </select>
          </div>
        </div>
        <div>
          <button id={styles.btnFilter}>Filtrar</button>
        </div>
      </form>

      <div id={styles.content}>
        <div id={styles.banner}>
          <div id={styles.bgBanner}>
            <div id={styles.contentBanner}>
              <div>
                <h2 id={styles.titleBanner}>Anuncie a sua empresa com a gente!</h2>
                <p className={styles.descriptionBanner}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                <p className={styles.descriptionBanner}>Aqui a sua empresa será vista por mais de 2.000 mil pessoas POR DIAA!</p>
                <p id={styles.likeIdea}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
              </div>
              <div id={styles.boxLinkBanner}>
                <Link id={styles.wantBanner} href="#">Quero este Banner</Link>
              </div>
            </div>
          </div>
        </div>
        <div id={styles.boxCards}>
          <CardJobs/>
          <CardJobs/>
        </div>
      </div>

      <div id={styles.boxBtnShowMore}>
        <button id={styles.btnShowMore}>Mostrar mais</button>
      </div>

      <div id={styles.searchBy}>
        <div id={styles.boxTitleSearchBy}>
          <h1 id={styles.titleSearchBy}>Aproveite e busque também por:</h1>
        </div>
        <div id={styles.boxUnListSearchBy}>
          <ul id={styles.unListSearchBy}>
            <li>
              <Link className={styles.linkSearchBy} href="#">Product Owner</Link>
            </li>
            <li>
              <Link className={styles.linkSearchBy} href="#">Design</Link>
            </li>
            <li>
              <Link className={styles.linkSearchBy} href="#">Dev Full-stack</Link>
            </li>
            <li>
              <Link className={styles.linkSearchBy} href="#">UX/UI Design</Link>
            </li>
            <li>
              <Link className={styles.linkSearchBy} href="#">Scrum Master</Link>
            </li>
          </ul>
        </div>
      </div>

      <div id={styles.sectionWebTech}>
        <div id={styles.contentWebtech}> 
          <div id={styles.boxTitleWebtech}>
            <h2 id={styles.titleWebtech}>Deseja um site para a sua empresa? A <strong id={styles.webtech}>web-tech</strong> pode te ajudar!</h2>
            <Link id={styles.webtechWantSite} href="#">Obter</Link>
          </div>
          <div id={styles.boxImgWebTech}>
            <Image id={styles.imgWebtech} src={logoWebtech} alt="Web-tech Soluções Digitais"/>
          </div>
        </div>
      </div>

      <Footer/>
    </div>
  );
}
