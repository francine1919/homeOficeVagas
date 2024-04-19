import styles from "@/styles/contatos.module.scss";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

import Link from "next/link";
import Image from "next/image";

import iconInstagram from "@/public/icons/icon_white_instagram.png";
import iconEmail from "@/public/icons/icon_white_email.png";
import iconWhatsapp from "@/public/icons/icon_white_whatsapp.png";

import { robotoFlex } from "@/fonts/font";

import { useState } from "react";

export default function Contatos() {

  const [name, setName] = useState();
  const [tellPhone, setTellPhone] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  console.log(tellPhone)

  return (
    <div id={styles.contactPage} className={robotoFlex.className}>
      <Header/>

      <div id={styles.banner}>
        <div id={styles.bgBanner}>
          <div id={styles.bgFrontBanner}>
            <div id={styles.content}>
              <div id={styles.titlesContact}>
                <h2 id={styles.titleBanner}>Deseja entrar em contato com a Home Office vagas?</h2>
                <p id={styles.descriptionBanner}>Nesta página voce consegue falar com a gente. Temos varios meios de comunicações, fique a vontade para escolher o que lhe agradar melhor.</p>
              </div>
              <div id={styles.boxLinksPartners}>
                <Link id={styles.linkPartnerSite} href="https://api.whatsapp.com/send?phone=5561982434868&text=Olá, vim do site Home Office Vagas e gostaria de anunciar em seu site!" target="_blank">Anunciar no Site</Link>
                <Link id={styles.linkPartner} href="https://api.whatsapp.com/send?phone=5561982434868&text=Olá, vim do site Home Office Vagas e tenho interesse em parcerias!" target="_blank">Parcerias</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id={styles.mainContent}>
        <div id={styles.sectionMainContact}>
          <div id={styles.mainTextContact}>
            <div>
              <h1 id={styles.titleMainContact}>EEII! Quer anunciar o seu negócio aqui na HOV? Essa é a hora!</h1>
              <p className={styles.descripitonMainContact}>Isso mesmo que voce leu, a Home Office Vagas sede parte do seu site para mostrar o seu negócio.</p>
              <p className={styles.descripitonMainContact}>Voce deve ter visto alguns Banners pelo site, se voce gostou de algum basta voce anotar o ID do banner, que fica na parte inferior esquerda do banner e em seguida, falar com a gente.</p>
              <p className={styles.descripitonMainContact}>Use o botão abaixo “quero anunciar”, se voce deseja anunciar em nosso site.</p>
            </div>
            <div id={styles.boxLinkMainContact}>
              <Link className={styles.whiteLink} href="#">Quero anunciar</Link>
              <Link className={styles.blueLink} href="#">Mensagem</Link>
            </div>
          </div>
          <div id={styles.sectionForm}>
            <div id={styles.boxForm}>
              <h3 id={styles.titleForm}>Preencha o formulário abaixo para entrar em contato conosco.</h3>
              <form id={styles.formPage} method="post">
                <div className={styles.boxInputs}>
                  <label className={styles.titleEntrys} htmlFor="">Nome</label>
                  <input className={styles.entrys} type="text" onChange={(e) => setName(e.target.value)} minLength="3" maxLength="40" required/>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleEntrys} htmlFor="">Email</label>
                  <input className={styles.entrys} type="email" onChange={(e) => setEmail(e.target.value)} minLength="7" maxLength="40" required/>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleEntrys} htmlFor="">Telefone</label>
                  <input className={styles.entrys} type="tel" onChange={(e) => setTellPhone(e.target.value)} min="8" max="13" required/>
                </div>
                <div className={styles.boxInputs}>
                  <label className={styles.titleEntrys} htmlFor="">Mensagem</label>
                  <textarea id={styles.areaEntry} cols="30" rows="10" onChange={(e) => setMessage(e.target.value)} min="20" max="500" required></textarea>
                </div>
                <button id={styles.sendBtn}>Enviar</button>
              </form>
              <p id={styles.dataClients}>Seus dados estão seguros! Não se preocupe, não compartilhamos seus dados com ninguem.</p>
            </div>
          </div>
        </div>

        <div id={styles.sectionWebtech}>
          <div id={styles.boxTitleWebtech}>
            <h2 id={styles.titleWebtech}>A Home Office Vagas é mantida pela <strong id={styles.webtechStrong}>WEBTECH</strong>.</h2>
            <p className={styles.descriptionWebtech}>Uma empresa de Tecnologia focada na criação de sites.</p>
            <p className={styles.descriptionWebtech}>Aqui nós criamos todos os tipos de sites, desde landing-pages até e-commerces robustos. Temos clientes no Brasil todo, visite o nosso site para olhar alguns cases de sucesso que trabalhamos.</p>
          </div>
          <div id={styles.boxLinksWebtech}>
            <Link className={styles.blueLink} href="#">Visitar Site</Link>
            <Link className={styles.whiteLink} href="#">Quero um site</Link>
          </div>
        </div>

      </div>

        <div id={styles.bannerAdvertising}>
          <div id={styles.bgAdvertising}>
            <div>
              <h2 id={styles.titleAdvertising}>Anuncie sua empresa neste Banner!</h2>
              <p id={styles.descriptionAdvertising}>Aqui o seu anuncio é visto por mais de 2.000 pessoas todos os dias. Venha ser visto, a sua empresa precisa disso.</p>
            </div>
            <a id={styles.wantBannerAdvertising} href="mailto:homeofficevagas77@gmail.com">Quero este Banner</a>
          </div>
        </div>

        <div id={styles.socialMedias}>
          <div id={styles.midias}>
            <h2 id={styles.titleSocialMedias}>Redes Socias</h2>
            <p id={styles.descriptionSocialMedias}>Visite nossas rede sociais, que também é outra forma de comunicação.</p>
          </div>
          <div id={styles.boxIconsSocialMedias}>
            <Image className={styles.iconSocial} src={iconInstagram} alt="Icone Insta"/>
            <Image className={styles.iconSocial} src={iconWhatsapp} alt="Icone Whatsapp"/>
            <Image className={styles.iconSocial} src={iconEmail} alt="Icone Email"/>
          </div>
        </div>

        <Footer/>
    </div>
  );
}
