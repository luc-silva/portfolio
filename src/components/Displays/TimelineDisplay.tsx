import { useContext } from "react"; 
import { timelineDisplayText } from "../../constants/page-texts";

import { JobExperienceCard } from "../Cards/JobExperienceCard";
import { LanguageContext } from "../../Utils/LanguageContext";
 
import styles from "./TimelineDisplay.module.css";

export const TimelineDisplay = () => {
    let { lang } = useContext(LanguageContext);

    return (
        <div className={styles["timeline"]}>
            <div className={styles["timeline__title"]}>
                <h2>{timelineDisplayText.page_title[lang]}</h2>
            </div>
            <div className={styles["timeline__cards"]}>
                <JobExperienceCard />
            </div>
        </div>
    );
};
