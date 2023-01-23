import {ArrowSquareOut} from "phosphor-react"

import styles from "./ProjectCard.module.css";

export const ProjectCard = () => {
    return (
        <div className={styles["project-card"]}>
            <img
                src={require(`../../Images/project-restaurant.png`)}
                alt="Project image"
                className={styles["card-image"]}
            />
            <div className={styles["card-footer"]}>
                <div className={styles["footer-main"]}>
                    <div className={styles["item-title"]}>Calculadora</div>
                    <div className={styles["item-tags"]}>JS</div>
                </div>
                <a >
                    Github
                    <ArrowSquareOut size={18}/>
                </a>
            </div>
        </div>
    );
};
