import { educationDetails } from "../../../data";
import { useContext } from "react";
import { educationText } from "../../../constants/page-texts";
import { PortfolioContext } from "../../../context/PortfolioProvider";
import styles from "./styles.module.css";
import { EducationCard } from "./EducationCard";

export const AboutMeEducation = () => {
    const { language } = useContext(PortfolioContext);

    return (
        <div className={styles["aboutme-education"]}>
            <div className={styles["aboutme-education__title"]}>
                <h3>{educationText.page_title[language]}</h3>
            </div>
            <div className={styles["aboutme-education__container"]}>
                {educationDetails.map((data) => (
                    <EducationCard data={data} />
                ))}
            </div>
        </div>
    );
};
