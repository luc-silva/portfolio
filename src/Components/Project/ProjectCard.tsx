import { ArrowSquareOut } from "phosphor-react";
import { useEffect, useState } from "react";

import styles from "./ProjectCard.module.css";

interface project {
    projectTitle: string;
    projectLink: string;
    projectImages: string[];
    projectTags: string[];
}

export const ProjectCard = ({
    projectTitle,
    projectLink,
    projectImages,
    projectTags,
}: project) => {
    let [counter, setCounter] = useState(0);
    let [actualImage, setActualImage] = useState(getImage(projectImages[0]));
    let [isMouseHovering, toggleMouseHovering] = useState(false);

    useEffect(() => {
        let timer = setInterval(() => {
            setCounter(() => {
                return counter + 1;
            });
            setActualImage(getImage(projectImages[counter]));
            if (counter == projectImages.length - 1) {
                setCounter(0);
            }
        }, 1000);
        if (!isMouseHovering) {
            setCounter(0);
            setActualImage(getImage(projectImages[counter]));
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [counter, isMouseHovering, actualImage]);

    function getImage(item: string) {
        return require(`../../Images/` + item);
    }

    return (
        <div
            className={styles["project-card"]}
            onMouseOver={() => {
                toggleMouseHovering(true);
            }}
            onMouseOut={() => {
                toggleMouseHovering(false);
                // setActualImage(
                //     require(`../../Images/` + projectImages[counter])
                // );
            }}
        >
            <img
                src={actualImage}
                alt="Project image"
                className={styles["card-image"]}
            />
            <div className={styles["card-footer"]}>
                <div className={styles["footer-main"]}>
                    <div className={styles["item-title"]}>{projectTitle}</div>
                    <div className={styles["item-tags"]}>
                        {projectTags.map((tag, index) => {
                            if (index == projectTags.length - 1) {
                                return `${tag}`;
                            } else {
                                return `${tag}, `;
                            }
                        })}
                    </div>
                </div>
                <a href={projectLink} target="_blank">
                    Github
                    <ArrowSquareOut size={18} />
                </a>
            </div>
        </div>
    );
};
