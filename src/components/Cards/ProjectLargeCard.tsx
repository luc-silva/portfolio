import { ProjectCardTitleDisplay } from "../Displays/ProjectCardTitleDisplay";
import { ProjectImageDisplay } from "../Displays/ProjectImageDisplay";
import styles from "./ProjectLargeCard.module.css";

export const ProjectLargeCard = ({ project }: { project: IProjectData }) => {
    return (
        <div className={styles["project-large-card"]}>
            <div className={styles["card-image-container"]}>
                <ProjectImageDisplay images={project.images} />
            </div>
            <div className={styles["card-main"]}>
                <div className={styles["main-title"]}>
                    <ProjectCardTitleDisplay
                        tags={project.tags}
                        title={project.title}
                    />
                </div>
                <div className={styles["main-text"]}>
                    <p>{project.introduction}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: project.description.replace(/\n/g, "<br/>"),
                        }}
                    />
                    <div className={styles["project-links"]}>
                        <p>
                            Veja o código fonte{" "}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >aqui</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
