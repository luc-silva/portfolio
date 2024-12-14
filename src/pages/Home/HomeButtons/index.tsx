import { Link } from "react-router-dom";
import { CurriculumButton } from "../../AboutMe/CurriculumButton/CurriculumButton";
import { ArrowRight } from "phosphor-react";
import { homeText } from "../../../constants/page-texts";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageProvider";
import styles from "./styles.module.css";

export const HomeButtons = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <>
            <Link className={styles["project-button"]} to="/projects">
                {homeText.ctc_projects[lang.value]}
                <ArrowRight size={20} weight="bold" />
            </Link>

            <div className={styles["curriculum-button"]}>
                <CurriculumButton text={homeText.ctc_cv[lang.value]} />
            </div>
        </>
    );
};
