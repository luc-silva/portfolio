import { ProjectCard } from "../Cards/ProjectCard";
import { projects } from "../../data";
import styles from "./OtherProjectsDisplay.module.css";

export const OtherProjectsDisplay = () => {
    return (
        <div className={styles["projects-container"]}>
            {projects
                .filter((item: IProjectData) => !item.main_project)
                .map((data: IProjectData, index: number) => {
                    return <ProjectCard project={data} key={index} />;
                })}
        </div>
    );
};
