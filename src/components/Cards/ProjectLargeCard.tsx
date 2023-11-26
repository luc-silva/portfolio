import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../Utils/LanguageContext";
import {
    projectCardTitleDisplayText,
    projectLargeCardtext,
} from "../../constants/page-texts";

import { ProjectCardTitleDisplay } from "../Displays/ProjectCardTitleDisplay";
import { ProjectImageDisplay } from "../Displays/ProjectImageDisplay";

import styles from "./ProjectLargeCard.module.css";
import { Eye, GitFork, Star } from "phosphor-react";
import GithubService from "../../services/GithubService";
import { repositoryDefaulValue } from "../../constants/default-values";

export const ProjectLargeCard = ({ project }: { project: IProjectData }) => {
    let { lang } = useContext(LanguageContext);
    let [repoData, setRepoData] = useState<GithubRepository>(
        repositoryDefaulValue
    );

    useEffect(() => {
        GithubService.getRepositoryInfo(project.title)
            .then(setRepoData)
            .catch(() => {
                console.log("erro");
            });
    }, []);

    return (
        <div className={styles["project-large-card"]}>
            <div className={styles["card-image-container"]}>
                <ProjectImageDisplay images={project.images} />
            </div>
            <div className={styles["card-main"]}>
                <div className={styles["main-title"]}>
                    <div>
                        <div className={styles["title"]}>{project.title}</div>
                        <div className={styles["tags"]}>
                            {project.tags.join(", ")}
                        </div>
                    </div>
                    {project.containsApi && (
                        <div className={styles["api-mark"]}>
                            {projectCardTitleDisplayText.api[lang]}
                        </div>
                    )}
                </div>
                <div className={styles["main-text"]}>
                    <p>{project.introduction[lang]}</p>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: project.description[lang].replace(
                                    /\n/g,
                                    "<br/>"
                                ),
                            }}
                        />
                        <div className={styles["project-links"]}>
                            <p>
                                {projectLargeCardtext.ctc_repository[lang]}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        projectLargeCardtext.ctc_repository_btn[
                                            lang
                                        ]
                                    }
                                </a>
                                .
                            </p>
                        </div>
                        <div className={styles["repo-statistics"]}>
                            <div className={styles["repo-icons"]}>
                                {repoData.watchers}
                                <Eye size={24} weight="regular" />
                            </div>
                            <div className={styles["repo-icons"]}>
                                {repoData.stargazers_count}
                                <Star size={24} weight="regular" />
                            </div>
                            <div className={styles["repo-icons"]}>
                                {repoData.forks}
                                <GitFork size={24} weight="regular" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
