import { useEffect, useContext } from "react";
import { jobExperiences } from "../../constants/jobExperiences";
import { experienceText } from "../../constants/page-texts";
import { Briefcase } from "phosphor-react";
import { FormatedDateDisplay } from "./FormatedDateDisplay";
import { JobExperienceCard } from "./JobExperienceCard";
import { getRepositoryInfo } from "../../services";
import { PortfolioContext } from "../../context/PortfolioProvider";
import styles from "./styles.module.css";

export const JobExperience = () => {
    const { language } = useContext(PortfolioContext);

    useEffect(() => {
        getRepositoryInfo("electroware");
    }, []);

    return (
        <main className={styles["job-experience"]}>
            <section className={styles["career"]}>
                <div className={styles["career__title"]}>
                    <h2>{experienceText["page_title"][language]}</h2>
                </div>
                <div className={styles["career__main"]}>
                    {jobExperiences.map((data: JobExperience) => (
                        <div className={styles["job-container"]}>
                            <div className={styles["job-timeline__period"]}>
                                <p>
                                    <FormatedDateDisplay period={data.period} />
                                </p>

                                <div className={styles["job-icon"]}>
                                    <Briefcase size={32} />
                                </div>
                            </div>
                            <div className={styles["job-timeline__info"]}>
                                <span
                                    className={styles["job-timeline__detail"]}
                                />
                                <JobExperienceCard data={data} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};
