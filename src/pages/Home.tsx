import { Link } from "react-router-dom";

import { HomeLinks } from "../components/Misc/HomeLinks";
import { ArrowRight, FileArrowDown } from "phosphor-react";

import { useContext } from "react";
import { LanguageContext } from "../Utils/LanguageContext";
import { homeText } from "../constants/page-texts";
import {  CurriculumButton } from "../components/Misc/CurriculumButton";
import styles from "./Home.module.css";

export const Home = () => {
    let { lang } = useContext(LanguageContext);

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
                        <CurriculumButton text={homeText.ctc_cv[lang]} />
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
