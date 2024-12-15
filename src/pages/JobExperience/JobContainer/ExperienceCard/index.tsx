import { useContext } from "react";
import { PortfolioContext } from "../../../../context/PortfolioProvider";
import { FormatedDateDisplay } from "../../FormatedDateDisplay";
import styles from "./styles.module.css";

export const ExperienceCard = ({ data }: { data: JobExperience }) => {
    const { language } = useContext(PortfolioContext);

    return (
        <div className={styles["card"]}>
            <div className={styles["card__title"]}>
                <strong>{data.role[language]}</strong>
                <div className={styles["card__title__display"]}>
                    <strong>{data.company.name}</strong>
                    <div className={styles["display__period"]}>
                        <FormatedDateDisplay period={data.period} />
                    </div>
                </div>
            </div>
            <div className={styles["card__about"]}>
                <div className={styles["card__about__description"]}>
                    <p>{data.description.text[language]}</p>
                </div>
                <ul className={styles["card__about__featured"]}>
                    {data.quantifiable_results[language] &&
                        data.quantifiable_results[language].map((item) => (
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
