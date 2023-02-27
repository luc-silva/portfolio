import { useState } from "react";
import { ImageModal } from "../components/ImageModal";
import { AboutMeCertificates } from "../components/AboutMeCertificates";
import { certificates } from "../data";

import { Download, Envelope, LinkedinLogo } from "phosphor-react";
import styles from "./AboutMe.module.css";
import { Skills } from "../components/Skills";

export const AboutMe = ({
    setModalImage,
    toggleImageModal,
}: {
    setModalImage: Function;
    toggleImageModal: Function;
}) => {
    return (
        <main role={"main"} className={styles["aboutme"]}>
            <section className={styles["aboutme-main"]}>
                <div className={styles["aboutme-info"]}>
                    <div className={styles["aboutme-title"]}>
                        <h2>Sobre Mim</h2>
                        <p>
                            Sou Lucas, um estudante de Engenharia de Software...
                        </p>
                    </div>

                    <div className={styles["aboutme-about"]}>
                        <div className={styles["about-text"]}>
                            <p>
                                Atualmente cursando o terceiro semestre, busco
                                por uma oportunidade de estágio na área de
                                desenvolvimento. Utilizo Javascript como minha
                                principal linguagem de programação, estando
                                atualmente aprendendo React em conjunto com
                                Typescript e ainda pretendo aprender Java
                                backend futuramente.
                            </p>
                            <p>
                                Desde pequeno era fã do mundo de desenvolvimento
                                de software, em especial a área de jogos. Em
                                2016 cheguei a cursar um curso de
                                desenvolvimento de games, tendo o concluido em
                                2018. Não possuo experiência de trabalho e nem
                                como freelancer, mas sempre tento me desafiar ao
                                aplicar novas implementações em meus projetos.
                            </p>
                        </div>
                        <div className={styles["about-resume"]}>
                            <Download size={24} color="var(--title-color)" />
                            <a
                                href={require("../assets/lucas-silva-resume.pdf")}
                                download="lucas-silva-cv.pdf"
                            >
                                Baixar Curriculo
                            </a>
                        </div>
                    </div>
                </div>
                <div className={styles["aboutme-contact"]}>
                    <div className={styles["contact-title"]}>
                        <h3>ENTRE EM CONTATO</h3>
                        <p>Sao Paulo - SP, Brasil</p>
                    </div>
                    <div className={styles["contact-info"]}>
                        <div>
                            <LinkedinLogo
                                size={20}
                                color={"var(--main-color)"}
                            />
                            Linkedin: luc-silva
                        </div>
                        <div>
                            <Envelope size={20} color={"var(--main-color)"} />
                            Email: lucas.silva1203@outlook.com
                        </div>
                    </div>
                </div>
            </section>
            <Skills />
            <AboutMeCertificates toggleImageModal={toggleImageModal}  setModalImage={ setModalImage} />
        </main>
    );
};
