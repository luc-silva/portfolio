import { Download } from "phosphor-react";
import styles from "./AboutMeAbout.module.css";
import { EducationItem } from "./EducationItem";

export const AboutMeAbout = () => {
    return (
        <div className={styles["aboutme-about"]}>
            <div className={styles["about-presentation"]}>
                <p>
                    Atualmente cursando o terceiro semestre, busco por uma
                    oportunidade de estágio na área de desenvolvimento. Utilizo
                    Javascript como minha principal linguagem de programação,
                    estando atualmente aprendendo React em conjunto com
                    Typescript e ainda pretendo aprender Java backend
                    futuramente.
                </p>
                <p>
                    Desde pequeno era fã do mundo de desenvolvimento de
                    software, em especial a área de jogos. Em 2016 cheguei a
                    cursar um curso de desenvolvimento de games, tendo o
                    concluido em 2018. Não possuo experiência de trabalho e nem como freelancer, mas sempre tento me desafiar ao aplicar novas implementações em meus projetos.
                </p>
            </div>
            <div className={styles["about-curriculum"]}>
                <Download size={24} />
                <a href="" download="Curriculum Vitae.pdf">
                    Baixar Curriculo
                </a>
            </div>

        </div>
    );
};
