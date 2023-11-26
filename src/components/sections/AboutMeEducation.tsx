import { educationDetails } from "../../data";
import { useContext } from "react";
import styles from "./AboutMeEducation.module.css";
import { ThemeContext } from "../../context/ThemeProvider";
import { LanguageContext } from "../../Utils/LanguageContext";
import { format } from "date-fns";

export const AboutMeEducation = () => {
    const { theme } = useContext(ThemeContext);
    const { lang } = useContext(LanguageContext);

    return (
        <div className={styles["aboutme-education"]}>
            <div className={styles["aboutme-education__title"]}>
                <h3>Education</h3>
            </div>
            <div className={styles["aboutme-education__container"]}>
                {educationDetails.map(
                    ({
                        logo_path,
                        course,
                        course_type,
                        period,
                        school,
                        logo_changable,
                        duration,
                    }) => (
                        <div className={styles["education-card"]}>
                            <div className={styles["logo"]}>
                                <img
                                    src={require(`../../assets/images/${
                                        logo_changable
                                            ? logo_path[theme]
                                            : logo_path.default
                                    }`)}
                                    alt="Estacio logo"
                                />
                            </div>
                            <div className={styles["education__info"]}>
                                <div
                                    className={styles["education__info__main"]}
                                >
                                    <strong>{course[lang]}</strong>
                                    <p>{school.name}</p>
                                </div>
                                <div
                                    className={
                                        styles["education__info__period"]
                                    }
                                >
                                    {format(period.start, "MMMM yy")} -{" "}
                                    {format(period.end, "MMMM yy")}
                                    {duration &&
                                        `| ${duration?.length} ${
                                            duration?.type[
                                                lang as "en_us" | "pt_br"
                                            ]
                                        }`}
                                </div>
                                <div
                                    className={
                                        styles["education__info__description"]
                                    }
                                >
                                    {school.description[lang].map((item) => (
                                        <p>{item}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
