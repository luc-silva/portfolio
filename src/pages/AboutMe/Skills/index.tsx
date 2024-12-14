import { tools } from "../../../data";
import { useContext } from "react";
import { skillsText } from "../../../constants/page-texts";
import { SkillDetails } from "./SkillDetails";
import { PortfolioContext } from "../../../context/PortfolioProvider";
import styles from "./styles.module.css";

export const Skills = () => {
    const { language } = useContext(PortfolioContext);

    return (
        <section className={styles["skills"]}>
            <div className={styles["skills-title"]}>
                <h2>{skillsText.page_title[language]}</h2>
                <p>{skillsText.page_subtitle[language]}</p>
            </div>
            <ul className={styles["skills-container"]}>
                {tools.map((data, index) => (
                    <SkillDetails details={data} key={index} />
                ))}
            </ul>
        </section>
    );
};
