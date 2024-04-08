import Image from "next/image";

import logo from "@/public/logos/logo-um-recorte.png";
import Link from "next/link";

import iconEmail from "@/public/icons/email_icon.png";
import iconTell from "@/public/icons/tell_icon.png";

import styles from "./Footer.module.scss";

/* import welcomeHomeOfficeVagas from "@/utils/nodeMailer" ; */

import { useState } from 'react';

import { useDispatch } from "react-redux";

import { registerEmail } from "@/redux/welcomeEmail/welcomeEmailSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Footer(){
    const [emailNewsLetter, setEmailNewsLetter] = useState();

    const dispatch = useDispatch();

    function getValue(value){
        setEmailNewsLetter(value)
    }
    function cleanInput(email){
        dispatch(registerEmail(email))

        toast.success('Email Cadastrado com sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        setEmailNewsLetter("")
    }

    return(
        <footer>
            <div id={styles.footerIndex}>
                <div id={styles.aboutUs}>
                    <div id={styles.aboutUsOne}>
                        <Image id={styles.imgAboutUs} src={logo} height={200} width={300} alt="Logo"/>
                        <div id={styles.verticalLineAboutUs}></div>
                        <h4 id={styles.descriptionAboutUs}>A sua vaga internacional está aqui!</h4>
                    </div>
                    <div id={styles.aboutUsTwo}>
                        <h3 className={styles.titleFooter}>Sobre Nós</h3>
                        <p id={styles.descriptionAboutUsTwo}>Somos uma empresa focada em vagas de emprego gratuitas para todos.</p>
                    </div>
                </div>
                <div id={styles.information}>
                    <h3 className={styles.titleFooter}>Informações</h3>
                    <nav>
                        <ul className={styles.unList}>
                            <li>
                                <Link className={styles.descriptionFooter} href="/contatos">A Home Office Vagas</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="/vagas-internacionais">Vagas Internarcionais</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="/blog">Artigos</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="/vagas-locais">Vagas Locais Brasil</Link>
                            </li>
                        </ul>    
                    </nav>
                </div>
                <div id={styles.utilityLinks}>
                    <h3 className={styles.titleFooter}>Links Úteis</h3>
                    <nav>
                        <ul className={styles.unList}>
                            <li>
                                <Link className={styles.descriptionFooter} href="/contatos">Anunciar no Site</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="#">Politica De Privacidade</Link>
                            </li>
                            <li>
                                <Link className={styles.descriptionFooter} href="/termos-e-condicoes">Termos e Condições</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div id={styles.contactUs}>
                    <h3 className={styles.titleFooter}>Contate-nos</h3>
                    <div className={styles.boxIconsContactUs}>
                        <Image className={styles.icons} src={iconTell} height={20} width={20} alt="icone de telefone"/>
                        <div>
                            <span className={styles.descriptionFooter}>61 9 9244-4596</span>
                        </div>
                    </div>
                    <div className={styles.boxIconsContactUs}>
                        <Image className={styles.icons} src={iconEmail} height={20} width={20} alt="icone de email"/>
                        <div>
                            <span className={styles.descriptionFooter}>homeofficevagas@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div id={styles.register}>
                    <div>
                        <h3 className={`${styles.titleFooter} ${styles.registerTitle}`}>Cadastre-se para obter vagas em seu e-mail!</h3>
                        <div id={styles.boxRegister}>
                            <input id={styles.inputRegister} value={emailNewsLetter} onChange={(e) => getValue(e.target.value)} type="text" placeholder="Seu email aqui"/>
                            <button onClick={() => cleanInput(emailNewsLetter)} id={styles.btnRegister}>cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id={styles.rights}>
                <p id={styles.pgraphRights}>2023 ©Home Office Vagas | Todos os direitos reservados</p>
            </div>
            <ToastContainer />
        </footer>
    )
}