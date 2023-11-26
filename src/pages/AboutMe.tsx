import { Skills } from "../components/sections/Skills";
import { Contact } from "../components/Misc/Contact";
import { AboutMeInfo } from "../components/Misc/AboutMeInfo";
import { AboutMeCertificates } from "../components/sections/AboutMeCertificates";

import styles from "./AboutMe.module.css";
import { AboutMeEducation } from "../components/sections/AboutMeEducation";

export const AboutMe = ({
    setModalImage,
    toggleImageModal,
}: {
    setModalImage: Function;
    toggleImageModal: Function;
}) => {
    return (
        <main role="main" className={styles["aboutme"]}>
            <section className={styles["aboutme-main"]}>
                <AboutMeInfo />
            </section>
            <section className={styles["skills"]}>
                <Skills />
            </section>
            {/* <section className={styles["timeline"]}>
                <TimelineDisplay />
            </section> */}
            <section className={styles["education"]}>
                <AboutMeEducation />
            </section>
            <section className={styles["certificates"]}>
                <AboutMeCertificates
                    toggleImageModal={toggleImageModal}
                    setModalImage={setModalImage}
                />
            </section>
            <section className={styles["contact"]} id="contact">
                <Contact />
            </section>
        </main>
    );
};
