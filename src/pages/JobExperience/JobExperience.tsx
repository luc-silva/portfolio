import { useEffect, useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";
import { jobExperiences } from "../../constants/jobExperiences";
import { experienceText } from "../../constants/page-texts";
import GithubService from "../../services/GithubService";
import { Briefcase } from "phosphor-react";
import styles from "./JobExperience.module.css";
import { FormatedDateDisplay } from "./FormatedDateDisplay/FormatedDateDisplay";
import { JobExperienceCard } from "./JobExperienceCard/JobExperienceCard";

export const JobExperience = () => {
    const { lang } = useContext(LanguageContext);

    useEffect(() => {
        GithubService.getRepositoryInfo("electroware").then(console.log);
    }, []);

    return (
        <main className={styles["job-experience"]}>
            <section className={styles["career"]}>
                <div className={styles["career__title"]}>
                    <h2>{experienceText["page_title"][lang.value]}</h2>
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
