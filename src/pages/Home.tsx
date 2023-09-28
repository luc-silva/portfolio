import { Link } from "react-router-dom";

import { HomeLinks } from "../components/Misc/HomeLinks";
import { ArrowRight, FileArrowDown } from "phosphor-react";

import styles from "./Home.module.css";
import { useContext } from "react";
import { LanguageContext } from "../Utils/LanguageContext";
import { homeText } from "../constants/page-texts";
import { CurriculumDownloadBtn } from "../components/Misc/CurriculumDownloadBtn";

export const Home = () => {
    let { lang } = useContext(LanguageContext);
    let url = `${process.env.PUBLIC_URL}/lucas-silva-resume.pdf`;

    return (
        <main role={"main"} className={styles["home"]}>
            <section className={styles["greetings"]}>
                <div className={styles["greetings-main"]}>
                    <strong>{homeText.greeting[lang]}</strong>
                    <div className={styles["greetings-title"]}>
                        <h2>Lucas da Silva Santos</h2>
                        <p>{homeText.role[lang]}</p>
                    </div>
                </div>
                <div className={styles["buttons"]}>
                    <Link className={styles["project-button"]} to="/projects">
                        {homeText.ctc_projects[lang]}
                        <ArrowRight size={20} weight="bold" />
                    </Link>

                    <div className={styles["curriculum-button"]}>
                        <CurriculumDownloadBtn text={homeText.ctc_cv[lang]} />
                        <FileArrowDown size={20} weight="bold" />
                    </div>
                </div>
                <div className={styles["social-accounts"]}>
                    <ul>
                        <HomeLinks />
                    </ul>
                </div>
            </section>
        </main>
    );
};
