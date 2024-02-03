import { MainProjectsDisplay } from "../components/Displays/MainProjectsDisplay";
import { LanguageContext } from "../context/LanguageProvider";
import { projectText } from "../constants/page-texts";
import { useContext } from "react";
import styles from "./Project.module.css";

export const Project = () => {
    let { lang } = useContext(LanguageContext);
    return (
        <main className={styles["projects"]}>
            {/* page for detail projects, articles and activities (hackatons, CTF and so on). statistics should be in about me */}
            <section className={styles["projects-about"]}>
                <div className={styles["projects-title"]}>
                    <h2>{projectText.page_title[lang.value]}</h2>
                    <p>{projectText.page_subtitle[lang.value]}</p>
                </div>
            </section>
            <section className={styles["projects-main"]}>
                <MainProjectsDisplay />
            </section>
            {/* <section className={styles["projects-extra"]}>
                <div className={styles["projects-extra-title"]}>
                    <h2>{projectText.misc_projects[lang]}</h2>
                </div>
                <OtherProjectsDisplay />
            </section> */}
        </main>
    );
};
