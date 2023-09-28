import { useContext } from "react";
import { LanguageContext } from "../../Utils/LanguageContext"; 
import { projectLargeCardtext } from "../../constants/page-texts";

import { ProjectCardTitleDisplay } from "../Displays/ProjectCardTitleDisplay";
import { ProjectImageDisplay } from "../Displays/ProjectImageDisplay";

import styles from "./ProjectLargeCard.module.css"; 

export const ProjectLargeCard = ({ project }: { project: IProjectData }) => {
    let { lang } = useContext(LanguageContext);

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
                        containsApi={project.containsApi}
                    />
                </div>
                <div className={styles["main-text"]}>
                    <p>{project.introduction[lang]}</p>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: project.description[lang].replace(
                                /\n/g,
                                "<br/>"
                            ),
                        }}
                    />
                    <div className={styles["project-links"]}>
                        <p>
                            {projectLargeCardtext.ctc_repository[lang]}
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {projectLargeCardtext.ctc_repository_btn[lang]}
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
