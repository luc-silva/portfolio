import { educationDetails } from "../../../data";
import { useContext } from "react";
import styles from "./styles.module.css";
import { ThemeContext } from "../../../context/ThemeProvider";
import { format } from "date-fns";
import { educationText } from "../../../constants/page-texts";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const AboutMeEducation = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(PortfolioContext);

    return (
        <div className={styles["aboutme-education"]}>
            <div className={styles["aboutme-education__title"]}>
                <h3>{educationText.page_title[language]}</h3>
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
                                    src={`${process.env.PUBLIC_URL}/images/${
                                        logo_changable
                                            ? logo_path[theme]
                                            : logo_path.default
                                    }`}
                                    alt="Estacio logo"
                                />
                            </div>
                            <div className={styles["education__info"]}>
                                <div
                                    className={styles["education__info__main"]}
                                >
                                    <strong>{course[language]}</strong>
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
                                                language as "en_us" | "pt_br"
                                            ]
                                        }`}
                                </div>
                                <div
                                    className={
                                        styles["education__info__description"]
                                    }
                                >
                                    {school.description[language].map(
                                        (item) => (
                                            <p>{item}</p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
