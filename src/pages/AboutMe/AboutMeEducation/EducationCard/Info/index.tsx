import { useContext } from "react";
import { format } from "date-fns";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../../../context/PortfolioProvider";

interface IProps {
    data: EducationDetail;
}
export const Info = ({
    data: { course, school, period, duration },
}: IProps) => {
    const { language } = useContext(PortfolioContext);

    return (
        <div className={styles["education__info"]}>
            <div className={styles["education__info__main"]}>
                <strong>{course[language]}</strong>
                <p>{school.name}</p>
            </div>
            <div className={styles["education__info__period"]}>
                {format(period.start, "MMMM yy")} -{" "}
                {format(period.end, "MMMM yy")}
                {duration &&
                    `| ${duration?.length} ${
                        duration?.type[language as "en_us" | "pt_br"]
                    }`}
            </div>
            <div className={styles["education__info__description"]}>
                {school.description[language].map((item) => (
                    <p>{item}</p>
                ))}
            </div>
        </div>
    );
};
