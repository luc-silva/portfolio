import { useContext } from "react"; 
import { tools } from "../../data";
import { skillsText } from "../../constants/page-texts";

import { LanguageContext } from "../../Utils/LanguageContext";  
import styles from "./Skills.module.css"; 

export const Skills = () => {
    let { lang } = useContext(LanguageContext);

    return (
        <section className={styles["skills"]}>
            <div className={styles["skills-title"]}>
                <h2>{skillsText.page_title[lang]}</h2>
                <p>{skillsText.page_subtitle[lang]}</p>
            </div>
            <ul className={styles["skills-container"]}>
                {tools.map(
                    (
                        {
                            name,
                            toolImage,
                            additional_info,
                            info_active,
                            alt,
                        }: ITool,
                        index
                    ) => {
                        return (
                            <li key={index}>
                                <img
                                    loading="lazy"
                                    src={require(`../../assets/images/${toolImage}`)}
                                    alt={alt}
                                />
                                <p>{name}</p>
                                {info_active && (
                                    <em>{additional_info[lang]}</em>
                                )}
                            </li>
                        );
                    }
                )}
            </ul>
        </section>
    );
};
