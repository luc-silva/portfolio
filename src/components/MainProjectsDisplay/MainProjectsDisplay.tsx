import React, { useEffect, useState } from "react";
import { ProjectLargeCard } from "../ProjectLargeCard/ProjectLargeCard";
import { projects } from "../../data";
import styles from "./MainProjectsDisplay.module.css";

export const MainProjectsDisplay = () => {
    let [mainProjects, setMainProjects] = useState([] as [] | IProjectData[]);
    useEffect(() => {
        let filteredProjects = projects.filter(
            (item: IProjectData) => item.main_project
        );
        setMainProjects(filteredProjects);
    }, []);
    return (
        <div className={styles["main-projects"]}>
            {mainProjects.length > 0 &&
                mainProjects.map((item: IProjectData, index: React.Key) => {
                    return <ProjectLargeCard project={item} key={index} />;
                })}
        </div>
    );
};
