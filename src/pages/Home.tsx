import { CurriculumButton } from "../components/Misc/CurriculumButton";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";
import { ArrowRight } from "phosphor-react";
import { HomeLinks } from "../components/Misc/HomeLinks";
import { homeText } from "../constants/page-texts";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
    let { lang } = useContext(LanguageContext);

    return (
        <main role={"main"} className={styles["home"]}>
            <section className={styles["greetings"]}>
                <div className={styles["greetings-main"]}>
                    <strong>{homeText.greeting[lang.value]}</strong>
                    <div className={styles["greetings-title"]}>
                        <h2>Lucas da Silva Santos</h2>
                        <p>{homeText.role[lang.value]}</p>
                    </div>
                </div>
                <div className={styles["buttons"]}>
                    <Link className={styles["project-button"]} to="/projects">
                        {homeText.ctc_projects[lang.value]}
                        <ArrowRight size={20} weight="bold" />
                    </Link>

                    <div className={styles["curriculum-button"]}>
                        <CurriculumButton text={homeText.ctc_cv[lang.value]} />
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
