import { AboutMeInfo } from "./AboutMeInfo/AboutMeInfo";

import styles from "./AboutMe.module.css";
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioProvider";
import { AboutMeEducation } from "./AboutMeEducation/AboutMeEducation";
import { Skills } from "./Skills/Skills";
import { AboutMeCertificates } from "./AboutMeCertificates/AboutMeCertificates";
import { Contact } from "./Contact/Contact";

export const AboutMe = () => {
    const { setModalImage, handleImageModal } = useContext(PortfolioContext);
    return (
        <main role="main" className={styles["aboutme"]}>
            <section className={styles["aboutme-main"]}>
                <AboutMeInfo />
            </section>
            <section className={styles["skills"]}>
                <Skills />
            </section>
            <section className={styles["education"]}>
                <AboutMeEducation />
            </section>
            <section className={styles["certificates"]}>
                <AboutMeCertificates
                    toggleImageModal={handleImageModal}
                    setModalImage={setModalImage}
                />
            </section>
            <section className={styles["contact"]} id="contact">
                <Contact />
            </section>
        </main>
    );
};
