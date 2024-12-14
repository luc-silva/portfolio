import { useContext } from "react";
import { tools } from "../../../data";
import { skillsText } from "../../../constants/page-texts";
import styles from "./Skills.module.css";
import { LanguageContext } from "../../../context/LanguageProvider";
import { SkillDetails } from "./SkillDetails/Skills";

export const Skills = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <section className={styles["skills"]}>
            <div className={styles["skills-title"]}>
                <h2>{skillsText.page_title[lang.value]}</h2>
                <p>{skillsText.page_subtitle[lang.value]}</p>
            </div>
            <ul className={styles["skills-container"]}>
                {tools.map((data, index) => (
                    <SkillDetails details={data} key={index} />
                ))}
            </ul>
        </section>
    );
};
