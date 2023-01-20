import styles from "./AboutMe.module.css";
import { CertificationItem } from "./CertificationItem";
import { CaretRight, CaretLeft } from "phosphor-react";

export const AboutMe = () => {
    return (
        <section id="about-me" className={styles["portfolio-aboutme"]}>
            <div className={styles["aboutme-main"]}>
                <div className={styles["aboutme-info"]}>
                    <div className={styles["aboutme-title"]}>
                        <h2>About Me</h2>
                        <p></p>
                    </div>
                    <div className={styles["aboutme-about"]}>
                        <div className={styles["about-presentation"]}>
                            <p>
                                Atualmente cursando{" "}
                                <em>Engenharia de Software</em>, busco por
                                oportunidade de estágio na área de
                                desenvolvimento. Utilizo Javascript como minha
                                principal linguagem de programação, estando
                                atualmente aprendendo React junto com Typescript
                                e pretendo aprender Java futuramente.
                            </p>
                            <p>
                                Desde pequeno curtia o mundo de desenvolvimento
                                de software, em especial a area de games. Tanto
                                que meu primeiro contato com a programação foi
                                em 2016, ano em queme ingressar em um curso de
                                desenvolvimento de games, tendo o concluido em
                                2018.
                            </p>
                        </div>
                        <div className={styles["about-academic-container"]}>
                            <h3>Formacao Academica</h3>
                            {/* component here */}
                            <div className={styles["container-item"]}>
                                <div className={styles["item-title"]}>
                                    <div>
                                        <strong>Engenharia de Software</strong>{" "}
                                        <em>UNESA, Estacio de sa</em>
                                    </div>
                                    <p>
                                        Atualmente cursando o terceiro semestre
                                    </p>
                                </div>
                                <div className={styles["item-info"]}>
                                    <div>
                                        <span>Inicio:</span> 15 de Fevereiro,
                                        2022
                                    </div>
                                    <div>
                                        <span>Término:</span> Dezembro, 2025
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles["about-image-container"]}>
                    <img className={styles["about-image"]}></img>
                </div>
            </div>
            <div className={styles["aboutme-certification"]}>
                <h2>Certificações</h2>
                <div className={styles["certification-container"]}>
                    <CaretLeft size={50} weight="thin" color="var(--gray-700)"/>
                    <CertificationItem />
                    <CaretRight size={50} weight="thin" color="var(--gray-700)"/>
                </div>
            </div>
        </section>
    );
};
