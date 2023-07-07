import { ProjectCardTitleDisplay } from "../Displays/ProjectCardTitleDisplay";
import { ProjectImageDisplay } from "../Displays/ProjectImageDisplay";
import { LinkItem } from "../Misc/LinkItem";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ project }: { project: IProjectData }) => {
    return (
        <div className={styles["project-card"]}>
            <div className={styles["card-image"]}>
                <ProjectImageDisplay images={project.images} />
            </div>
            <div className={styles["card-footer"]}>
                <div className={styles["footer-main"]}>
                    <ProjectCardTitleDisplay
                        tags={project.tags}
                        title={project.title}
                    />
                </div>
                <div className={styles["footer-link"]}>
                    <LinkItem link={project.link} />
                </div>
            </div>
        </div>
    );
};
