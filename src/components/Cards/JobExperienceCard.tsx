import { FormatedDateDisplay } from "../Displays/FormatedDateDisplay";
import { useContext } from "react";

import styles from "./JobExperienceCard.module.css";
import { LanguageContext } from "../../context/LanguageProvider";

export const JobExperienceCard = ({ data }: { data: JobExperience }) => {
    const { lang } = useContext(LanguageContext);

    return (
        <div className={styles["card"]}>
            <div className={styles["card__title"]}>
                <strong>{data.role[lang.value]}</strong>
                <div className={styles["card__title__display"]}>
                    <strong>{data.company.name}</strong>
                    <div className={styles["display__period"]}>
                        <FormatedDateDisplay period={data.period} />
                    </div>
                </div>
            </div>
            <div className={styles["card__about"]}>
                <div className={styles["card__about__description"]}>
                    <p>{data.description.text[lang.value]}</p>
                </div>
                <ul className={styles["card__about__featured"]}>
                    {data.quantifiable_results[lang.value].map((item) => (
                        <li>{item}</li>
                    ))}
                </ul>
                <div className={styles["card__about__skills"]}>
                    {data.tools.map((item) => (
                        <p>{item}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};
