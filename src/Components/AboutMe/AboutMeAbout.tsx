import { FileArrowDown } from "phosphor-react";
import styles from "./AboutMeAbout.module.css";

export const AboutMeAbout = () => {
    return (
        <div className={styles["aboutme-about"]}>
            <div className={styles["about-presentation"]}>
                <p>
                    Atualmente cursando <em>Engenharia de Software</em>, busco
                    por oportunidade de estágio na área de desenvolvimento.
                    Utilizo Javascript como minha principal linguagem de
                    programação, estando atualmente aprendendo React junto com
                    Typescript e pretendo aprender Java futuramente.
                </p>
                <p>
                    Desde pequeno curtia o mundo de desenvolvimento de software,
                    em especial a area de games. Tanto que meu primeiro contato
                    com a programação foi em 2016, ano em queme ingressar em um
                    curso de desenvolvimento de games, tendo o concluido em
                    2018.
                </p>
            </div>
            <div className={styles["about-curriculum"]}>
                <a href="" download="Curriculum Vitae.pdf">
                    <FileArrowDown size={24} />
                    <p>Download CV</p>
                </a>
            </div>
            <div className={styles["about-academic-container"]}>
                <h3>Formacao Academica</h3>
                {/* component here */}
                
            </div>
        </div>
    );
};
