import { AboutMeCertificates } from "../components/AboutMeCertificates";
import { Download } from "phosphor-react";

import { Skills } from "../components/Skills";
import { AboutMeText } from "../components/Texts/AboutMeText";
import { AboutMeContactInfo } from "../components/Texts/AboutMeContactInfo";
import { Contact } from "../components/Misc/Contact";
import { TimelineDisplay } from "../components/Displays/TimelineDisplay";

import styles from "./AboutMe.module.css";
import { AboutMeInfo } from "../components/Misc/AboutMeInfo";

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
                <AboutMeInfo />
            </section>
            <section className={styles["skills"]}>
                <Skills />
            </section>
            {/* <section className={styles["timeline"]}>
                <TimelineDisplay />
            </section> */}
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
