import { projects } from "../../../data";
import { ProjectCard } from "./ProjectCard";
import styles from "./OtherProjectsDisplay.module.css";

export const OtherProjectsDisplay = () => {
    return (
        <div className={styles["projects-container"]}>
            {projects
                .filter((item: IProjectData) => !item.main_project)
                .map((data: IProjectData, index: number) => (
                    <ProjectCard project={data} key={index} />
                ))}
        </div>
    );
};
