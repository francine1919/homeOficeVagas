import Header from "@/components/header/Header";
import styles from "@/styles/blog.module.scss";

import { robotoFlex } from "@/fonts/font";

export default function Blog() {
 
  return (
    <div id={styles.pageBlog} className={robotoFlex.className}>
        <Header/>
        <div id={styles.boxInformation}>
            <h1 id={styles.waiting}>Aguarde... A pagina está sendo construída!</h1>
        </div>
    </div>
  )
}
