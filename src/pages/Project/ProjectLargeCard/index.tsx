import { useContext, useEffect, useState } from "react";
import {
    projectCardTitleDisplayText,
    projectLargeCardtext,
} from "../../../constants/page-texts";
import { ProjectImageDisplay } from "../ProjectImageDisplay";
import { Eye, GitFork, Star } from "phosphor-react";
import { getRepositoryInfo } from "../../../services";
import { PortfolioContext } from "../../../context/PortfolioProvider";
import styles from "./styles.module.css";

export const ProjectLargeCard = ({ project }: { project: IProjectData }) => {
    const { language } = useContext(PortfolioContext);
    const [repoData, setRepoData] = useState<GithubRepository | null>(null);

    useEffect(() => {
        getRepositoryInfo(project.title).then(setRepoData).catch(console.error);
    }, [project.title]);

    if (!repoData) return null;

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
                            {projectCardTitleDisplayText.api[language]}
                        </div>
                    )}
                </div>
                <div className={styles["main-text"]}>
                    <p>{project.introduction[language]}</p>
                    <div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: project.description[language].replace(
                                    /\n/g,
                                    "<br/>"
                                ),
                            }}
                        />
                        <div className={styles["project-links"]}>
                            <p>
                                {projectLargeCardtext.ctc_repository[language]}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {
                                        projectLargeCardtext.ctc_repository_btn[
                                            language
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
