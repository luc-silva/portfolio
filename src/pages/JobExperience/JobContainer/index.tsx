import { Briefcase } from "phosphor-react";
import { FormatedDateDisplay } from "../FormatedDateDisplay";
import styles from "./styles.module.css";
import { ExperienceCard } from "./ExperienceCard";

interface IProps {
    data: JobExperience;
}

export const JobContainer = ({ data }: IProps) => {
    return (
        <div className={styles["job-container"]}>
            <div className={styles["job-timeline__period"]}>
                <FormatedDateDisplay period={data.period} />
                <div className={styles["job-icon"]}>
                    <Briefcase size={32} />
                </div>
            </div>
            <div className={styles["job-timeline__info"]}>
                <span className={styles["job-timeline__detail"]} />
                <ExperienceCard data={data} />
            </div>
        </div>
    );
};
