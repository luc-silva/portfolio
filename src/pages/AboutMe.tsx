import { useState } from "react";
// import { ImageModal } from "./ImageModal";
import { AboutMeCertificates } from "../components/AboutMeCertificates";
import { certificates } from "../data";

import { Download } from "phosphor-react";
import styles from "./AboutMe.module.css";
import { ProjectSkills } from "../components/ProjectSkills";

export const AboutMe = () => {
    let [counter, setCounter] = useState(0);
    let [modalFlag, setModalFlag] = useState(false);
    let [modalImage, setModalImage] = useState(
        "../../Images/cert-intermediatewebdev.jpg"
    );

    function goUp() {
        if (counter != certificates.length - 1) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }
    function goBack() {
        if (counter > 0) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }
    function handleModal() {
        setModalFlag((previousFlag) => !previousFlag);
    }
    function handleModalImage(image: string) {
        setModalImage(image);
    }

    return (
        <main role={"main"} className={styles["aboutme"]}>
            {/* <ImageModal
                certImage={modalImage}
                modalActive={modalFlag}
                handleModal={handleModal}
            /> */}
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
                            <Download size={24} />
                            <a
                                href={require("../assets/lucas-silva-resume.pdf")}
                                download="lucas-silva-cv.pdf"
                            >
                                Baixar Curriculo
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div className={styles["about-image-container"]}>
                    <img
                        // src={require("../../Images/about-me.jpg")}
                        loading="lazy"
                        alt="Foto de fundo"
                        className={styles["about-image"]}
                    />
                </div> */}
            </section>
            <ProjectSkills />
            <AboutMeCertificates
                certificates={certificates}
                counter={counter}
                goBack={goBack}
                goUp={goUp}
                handleModal={handleModal}
                handleModalImage={handleModalImage}
            />
        </main>
    );
};
