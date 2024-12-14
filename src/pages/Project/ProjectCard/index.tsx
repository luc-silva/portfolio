import { LinkItem } from "../../../components/Misc/LinkItem";
import { ProjectCardTitleDisplay } from "../OtherProjectsContainer/ProjectCard/ProjectCardtitleDisplay";
import { ProjectImageDisplay } from "../ProjectImageDisplay";
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
