import { Link } from "react-router-dom";
import { CurriculumButton } from "../../AboutMe/CurriculumButton/CurriculumButton";
import { ArrowRight } from "phosphor-react";
import { homeText } from "../../../constants/page-texts";
import { useContext } from "react";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const HomeButtons = () => {
    const { language } = useContext(PortfolioContext);

    return (
        <>
            <Link className={styles["project-button"]} to="/projects">
                {homeText.ctc_projects[language]}
                <ArrowRight size={20} weight="bold" />
            </Link>

            <div className={styles["curriculum-button"]}>
                <CurriculumButton text={homeText.ctc_cv[language]} />
            </div>
        </>
    );
};
