import { ProjectImageDisplay } from "../../ProjectImageDisplay";
import { LinkItem } from "../../../../components/Misc/LinkItem";
import styles from "./ProjectCard.module.css";
import { ProjectCardTitleDisplay } from "./ProjectCardtitleDisplay";

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
