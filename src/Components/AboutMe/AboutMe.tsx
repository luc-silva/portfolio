import styles from "./AboutMe.module.css";

export const AboutMe = () => {
    return (
        <section id="about-me" className={styles["portfolio-aboutme"]}>
            <div className={styles["aboutme-title"]}>
                <h2>About Me</h2>
                <p></p>
            </div>
            <div className={styles["aboutme-about"]}>
                <div className={styles["about-container"]}>
                    <p>
                        Atualmente cursando <em>Engenharia de Software</em>,
                        busco por oportunidade de estágio na área de
                        desenvolvimento. Utilizo Javascript como minha
                        principal linguagem de programação, estando atualmente
                        aprendendo React junto com Typescript.
                    </p>
                    <p>
                        Desde pequeno curtia o mundo de desenvolvimento de software, em especial a area de games. Tanto que meu primeiro contato com a programação foi em 2016, ano em queme ingressar em um curso de desenvolvimento de games, tendo o concluido em 2018.
                    </p>
                </div>
                <div className={styles["about-image-container"]}>
                    <img className={styles["about-image"]}>
                    
                    </img>
                </div>
            </div>
        </section>
    );
};
