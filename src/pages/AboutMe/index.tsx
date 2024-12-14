import { AboutMeInfo } from "./AboutMeInfo";

import { AboutMeEducation } from "./AboutMeEducation";
import { Skills } from "./Skills";
import { AboutMeCertificates } from "./AboutMeCertificates/AboutMeCertificates";
import { Contact } from "./Contact";
import styles from "./styles.module.css";

export const AboutMe = () => {
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
                <AboutMeCertificates />
            </section>
            <section className={styles["contact"]} id="contact">
                <Contact />
            </section>
        </main>
    );
};
