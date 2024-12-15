import { useContext } from "react";
import { projectCardTitleDisplayText } from "../../../constants/page-texts";
import { ProjectImageDisplay } from "../ProjectImageDisplay";
import { PortfolioContext } from "../../../context/PortfolioProvider";
import { RepositoryDetails } from "./RepositoryDetails";
import styles from "./styles.module.css";

export const ProjectLargeCard = ({ project }: { project: IProjectData }) => {
    const { language } = useContext(PortfolioContext);

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
                <RepositoryDetails project={project} />
            </div>
        </div>
    );
};
