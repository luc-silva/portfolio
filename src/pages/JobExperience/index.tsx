import { useContext } from "react";
import { jobExperiences } from "../../constants/jobExperiences";
import { experienceText } from "../../constants/page-texts";
import { PortfolioContext } from "../../context/PortfolioProvider";
import { JobContainer } from "./JobContainer";
import styles from "./styles.module.css";

export const JobExperience = () => {
    const { language } = useContext(PortfolioContext);

    return (
        <main className={styles["job-experience"]}>
            <section className={styles["career"]}>
                <div className={styles["career__title"]}>
                    <h2>{experienceText["page_title"][language]}</h2>
                </div>
                <div className={styles["career__main"]}>
                    {jobExperiences.map((data: JobExperience) => (
                        <JobContainer data={data} />
                    ))}
                </div>
            </section>
        </main>
    );
};
