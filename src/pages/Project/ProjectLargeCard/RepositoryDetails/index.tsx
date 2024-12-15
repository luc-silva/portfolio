import { useContext, useEffect, useState } from "react";
import { projectLargeCardtext } from "../../../../constants/page-texts";
import { PortfolioContext } from "../../../../context/PortfolioProvider";
import { RepositoryStatistics } from "./RepositoryStatistics";
import { getRepositoryInfo } from "../../../../services";
import styles from "./styles.module.css";

interface IProps {
    project: IProjectData;
}

export const RepositoryDetails = ({ project }: IProps) => {
    const { language } = useContext(PortfolioContext);
    const [repoData, setRepoData] = useState<GithubRepository | null>(null);

    useEffect(() => {
        getRepositoryInfo(project.title).then(setRepoData).catch(console.error);
    }, [project.title]);

    if (!repoData) return null;

    return (
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
                    {projectLargeCardtext.ctc_repository[language]}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {projectLargeCardtext.ctc_repository_btn[language]}
                    </a>
                </div>
                <RepositoryStatistics repository={repoData} />
            </div>
        </div>
    );
};
