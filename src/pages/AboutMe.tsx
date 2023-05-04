import { AboutMeCertificates } from "../components/AboutMeCertificates";
import { Download } from "phosphor-react";
import { Skills } from "../components/Skills";
import { AboutMeText } from "../components/Texts/AboutMeText";
import { AboutMeContactInfo } from "../components/Texts/AboutMeContactInfo";

import curriculum from "../assets/lucas-silva-resume.pdf";
import styles from "./AboutMe.module.css";

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
                            <AboutMeText />
                        </div>
                        <div className={styles["about-resume"]}>
                            <Download size={24} color="var(--title-color)" />
                            <a href={curriculum} download="lucas-silva-cv.pdf">
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
                        <AboutMeContactInfo />
                    </div>
                </div>
            </section>
            <section className={styles["skills"]}>
                <Skills />
            </section>
            <section className={styles["certificates"]}>
                <AboutMeCertificates
                    toggleImageModal={toggleImageModal}
                    setModalImage={setModalImage}
                />
            </section>
        </main>
    );
};
