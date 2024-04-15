import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { robotoFlex } from "@/fonts/font";

import styles from "@/styles/politicaPrivacidade.module.scss";

export default function PolicePrivacyPage() {
  return (
    <div className={robotoFlex.className}>
        <Header/>
        <div id={styles.box}>
            <div id={styles.content}>
                <div id={styles.boxTitles}>
                    <h1 id={styles.titleMain}><span id={styles.titleMainSpan}>Politica de Privacidade</span></h1>
                    <h3 id={styles.subTitleMain}>Abril de 2024</h3>
                    <p id={styles.descriptionMain}>Esta Política de Privacidade descreve como o HomeOfficeVagas coleta, usa e protege as informações pessoais dos usuários que visitam nosso site.</p>
                </div>
                <main id={styles.mainContent}>
                    <ol>
                        <li className={styles.title}>Informações Coletadas</li>
                        <ul>
                            <li className={styles.description}>O HomeOfficeVagas não coleta informações pessoais dos usuários do site. Não exigimos que os usuários se cadastrem ou forneçam qualquer tipo de informação pessoal para visualizar as vagas de emprego listadas em nosso site.</li>
                        </ul>
                        <li className={styles.title}>Uso de Cookies</li>
                        <ul>
                            <li className={styles.description}>O HomeOfficeVagas pode utilizar cookies para melhorar a experiência de navegação do usuário. Os cookies são pequenos arquivos de texto armazenados no dispositivo do usuário para registrar informações padrão de acesso à internet e comportamento do usuário. Os cookies são utilizados apenas para análise de tráfego e personalização de conteúdo. Os usuários podem controlar o uso de cookies através das configurações do navegador.</li>
                        </ul>
                        <li className={styles.title}>Links para site de Terceiros</li>
                        <ul>
                            <li className={styles.description}>Nosso site pode conter links para sites de terceiros, como os sites dos empregadores que listam suas vagas de emprego. No entanto, não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que os usuários consultem as políticas de privacidade desses sites antes de fornecerem qualquer informação pessoal.</li>
                        </ul>
                        <li className={styles.title}>Segurança da Informação</li>
                        <ul>
                            <li className={styles.description}>O HomeOfficeVagas se compromete a garantir a segurança das informações dos usuários. Implementamos medidas de segurança adequadas para proteger contra o acesso não autorizado, alteração, divulgação ou destruição das informações pessoais dos usuários.</li>
                        </ul>
                        <li className={styles.title}>Alterações nesta Política</li>
                        <ul>
                            <li className={styles.description}>Podemos atualizar esta Política de Privacidade periodicamente para refletir alterações nas práticas de coleta e uso de informações. Recomendamos que os usuários revisitem esta página regularmente para se manterem informados sobre como protegemos as informações pessoais coletadas.</li>
                        </ul>
                        <li className={styles.title}>Contatos</li>
                        <ul>
                            <li className={styles.description}>Se os usuários tiverem dúvidas ou preocupações sobre esta Política de Privacidade, podem entrar em contato conosco através da página de Contatos.</li>
                            <li className={styles.description}>Ao acessar e usar o site do HomeOfficeVagas, os usuários concordam com os termos desta Política de Privacidade.</li>
                        </ul>
                    </ol>
                    <h3 id={styles.teamTitle}>Equipe Home Office Vagas</h3>
                </main>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
