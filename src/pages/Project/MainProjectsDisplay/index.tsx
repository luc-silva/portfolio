import React, { useEffect, useState } from "react";
import { ProjectLargeCard } from "../ProjectLargeCard";
import { projects } from "../../../data";
import styles from "./styles.module.css";

export const MainProjectsDisplay = () => {
    const [mainProjects, setMainProjects] = useState([] as [] | IProjectData[]);
    useEffect(() => {
        const filteredProjects = projects.filter(
            (item: IProjectData) => item.main_project
        );
        setMainProjects(filteredProjects);
    }, []);

    return (
        <div className={styles["main-projects"]}>
            {mainProjects.length > 0 &&
                mainProjects.map((item: IProjectData, index: React.Key) => (
                    <ProjectLargeCard project={item} key={index} />
                ))}
        </div>
    );
};
