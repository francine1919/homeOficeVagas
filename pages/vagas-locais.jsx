import CardJobs from "@/components/cardJobs/CardJobs";

import Header from "@/components/header/Header";

import Link from "next/link";

import styles from "@/styles/vagas.module.scss";
import { robotoFlex } from "@/fonts/font";

import Footer from "@/components/footer/Footer";

export default function VagasLocais() {
  return (
    <div id={styles.vagas} className={robotoFlex.className}>
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
        <div>
          <div id={styles.boxFilter}>
            <h3 id={styles.titleMainFilter}>Filtrar Resultados</h3>
            <form id={styles.formFilter} action="">
              <div id={styles.boxMainForm}>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Vaga</label>
                  <input className={styles.entrysFilter} type="text" />
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">País</label>
                  <select className={styles.entrysFilter} name="" id="">
                    <option value="">Argentina</option>
                    <option value="">Brasil</option>
                  </select>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleFilter} htmlFor="">Cidade</label>
                  <select className={styles.entrysFilter} name="" id="">
                    <option value="">Buenos Aires</option>
                    <option value="">Rio de Janeiro</option>
                  </select>
                </div>
              </div>
              <div>
                <button id={styles.btnFilter}>Filtrar</button>
              </div>
            </form>
          </div>
          
          <div id={styles.bannerTwo} className={styles.bannerTwoLocal}>
            <div id={styles.bgBannerTwo}>
              <div id={styles.contentBannerTwo}>
                <h3 id={styles.titleBannerTwo}>Anuncie sua empresa com a gente!</h3>
                <div id={styles.boxDescriptionTwo}>
                  <p className={styles.descriptionTwo}>Quer ter a sua empresa aparecendo para milhares de pessoas? Vem com a gente!</p>
                  <p className={styles.descriptionTwo}>Aqui a sua empresa será vista por mais de 2.000 mil pessoas POR DIAA!</p>
                  <p className={styles.descriptionTwo}>E aí, gostou da idéia? Clica no botão abaixo e adquira a sua empresa neste Banner mesmo!</p>
                </div>
                <Link id={styles.btnWantBanner} href="/">Quero este Banner</Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <CardJobs/>
          <CardJobs/>
          <button id={styles.btnShowMoreJobs}>Mais vagas</button>
        </div>
      </main>

      <div id={styles.advertising} className={styles.bannerTreeLocal}>
        <div id={styles.bgAdvertising}>
          <div id={styles.contentAdvertising}>
            <div id={styles.boxDescritionAdvertising}>
              <h2 id={styles.titleAdvertising}>Anuncie sua empresa neste Banner!</h2>
              <p id={styles.descriptionAdvertising}>Aqui o seu anuncio é visto por mais de 2.000 pessoas todos os dias. Venha ser visto, a sua empresa precisa disso.</p>
            </div>
            <Link href="/" id={styles.wantBannerTwo}>Quero este banner</Link>
          </div>
        </div>
      </div>

      <div id={styles.blogSection}>
        <div>
          <h2 id={styles.titleMainBlog}>Noticias do nosso Blog</h2>
        </div>
        <div id={styles.contentBlog}>
          <div className={styles.boxBlog}>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Brasília é escolhida para sediar o maior evento de mercado de trabalho do Centro-Oeste.</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Sesc abre 500 vagas de emprego temporário neste fim de ano.</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
          </div>
          <div className={styles.boxBlog}>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Veja aqui como está o mercado de TI e como conseguir uma bolsa de estudos Grátis!</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
            <Link href="/" className={styles.cardsBlog}>
              <h3 className={styles.titleBlog}>Como se dar bem em uma entrevista de emprego com Ana Sirquera</h3>
              <p className={styles.descriptionBlog}>Aprenda com uma especialista de ponta, Ana Vanessa explica como voce pode sair bem em uma entrevista de emprego.</p>
              <h6 className={styles.dateBlog}>25 de Fevereiro de 2023</h6>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
    </div>
  );
}
