import { useContext } from "react";
import { JobExperienceCard } from "../Cards/JobExperienceCard";
import { LanguageContext } from "../../Utils/LanguageContext";

import styles from "./TimelineDisplay.module.css";
import { timelineDisplayText } from "../../constants/page-texts";

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
