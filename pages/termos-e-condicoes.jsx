import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { robotoFlex } from "@/fonts/font";

import styles from "@/styles/termosCondicoes.module.scss";
import Head from "next/head";

export default function TermsAndConditionsPage() {
  return (
    <div className={robotoFlex.className} id={styles.termsAndConditionsPage}>
        <Head>
            <title>Termos e Condições - Home Office Vagas</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="Termos e Condições do site Home Office Vagas. Leia atentamente antes de utilizar nosso serviço de busca de empregos." />
            <meta property="og:site_name" content="Home Office Vagas" />
            <meta property="og:title" content="Termos e Condições - Home Office Vagas" />
            <meta property="og:description" content="Termos e Condições do site Home Office Vagas. Leia atentamente antes de utilizar nosso serviço de busca de empregos." />
            <meta property="og:locale" content="pt_BR" />
            <meta property="og:url" content="https://homeofficevagas.com.br/termos-e-condicoes" />
            <meta property="og:type" content="article" />
            <meta name="keywords" content="termos e condições, Home Office Vagas, emprego, vagas de emprego, Brasília, Distrito Federal" />
            <meta name="robots" content="index,follow" />
            <meta name="googlebot" content="index,follow" />
            <meta name="author" content="Equipe Home Office Vagas" />

            <meta name="google-adsense-account" content="ca-pub-5330292410910997" />
        </Head>

        <Header/>
        <main id={styles.mainContent}>
            <div id={styles.boxMainContent}>
                <div id={styles.boxTitles}>
                    <h1 id={styles.titleBySite}><span id={styles.titleMain}>Termos e Condições</span></h1>
                    <h3 id={styles.titleDate}>Abril de 2024</h3>
                    <h3 id={styles.welcomeTitle}>Bem vindos ao site Oficial da Home Office Vagas</h3>
                    <p id={styles.descriptionBySite}>Este website é operado pela equipe da Home Office Vagas, a empresa foi e é nativamente criada em Brasília, Distrito Federal. O site conta com diversas páginas que podem ser acessadas por qualquer pessoa do mundo. O website tem como intuito maior oferecer oportunidades de emprego, sendo elas locais e internacionais.</p>
                </div>
                <ol>
                    <li id={styles.title}>Uso do site</li>
                    <ul>
                        <li className={styles.description}>Nosso site é destinado a fornecer informações sobre vagas de emprego disponíveis em fontes confiáveis e atualizadas diariamente.</li>
                        <li className={styles.description}>Você concorda em utilizar nosso site apenas para fins legais e éticos. Não é permitido utilizar nosso site para atividades ilegais ou prejudiciais.</li>
                    </ul>
                    <li id={styles.title}>Vagas de Emprego</li>
                    <ul>
                        <li className={styles.description}>As vagas de emprego listadas em nosso site são coletadas de fontes confiáveis e parceiros que possuem vagas de emprego disponíveis.</li>
                        <li className={styles.description}>Não podemos garantir a disponibilidade contínua de todas as vagas listadas, pois elas estão sujeitas a alterações conforme a atualização dos parceiros</li>
                    </ul>
                    <li id={styles.title}>Responsabilidade</li>
                    <ul>
                        <li className={styles.description}>Não nos responsabilizamos por quaisquer decisões tomadas com base nas informações fornecidas em nosso site, incluindo a aplicação para vagas de emprego listadas.</li>
                        <li className={styles.description}>Recomendamos que os usuários verifiquem diretamente com os empregadores ou fontes originais das vagas para confirmar a precisão e a atualidade das informações.</li>
                    </ul>
                    <li id={styles.title}>Atualizações e Alterações</li>
                    <ul>
                        <li className={styles.description}>Nosso site é atualizado regularmente com novas vagas de emprego e outras informações relevantes</li>
                        <li className={styles.description}>Reservamo-nos o direito de fazer alterações ou atualizações em nosso site, incluindo a remoção ou adição de conteúdo, sem aviso prévio</li>
                    </ul>
                    <li id={styles.title}>Propriedade Intelectual</li>
                    <ul>
                        <li className={styles.description}>Todo o conteúdo disponível em nosso site, incluindo texto, gráficos, logotipos, imagens e software, é protegido por direitos autorais e outras leis de propriedade intelectual.</li>
                        <li className={styles.description}>Você concorda em respeitar todos os direitos autorais e outras informações de propriedade exibidas em nosso site.</li>
                    </ul>
                    <li id={styles.title}>Privacidade</li>
                    <ul>
                        <li className={styles.description}>Respeitamos a privacidade dos nossos usuários. Para mais informações sobre como tratamos seus dados pessoais, consulte nossa Política de Privacidade.</li>
                    </ul>
                    <li id={styles.title}>Contato</li>
                    <ul>
                        <li className={styles.description}>Se você tiver alguma dúvida ou preocupação sobre estes Termos e Condições, entre em contato conosco através dos meios de contato fornecidos em nosso site.</li>
                    </ul>
                </ol>
                <h3 id={styles.homeOfficeVagas}>Equipe Home Office Vagas.</h3>
            </div>
        </main>
        <Footer/>
    </div>
  )
}
