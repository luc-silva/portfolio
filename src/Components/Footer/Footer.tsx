import { FileArrowDown } from "phosphor-react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles["portfolio-footer"]}>
            <div>
                <p>Portfolio created using ReactJS, HTML/CSS and Typescript.</p>
                <p>
                    Icons by{" "}
                    <a href="https://phosphoricons.com/" target={"_blank"}>
                        Phosphor-React
                    </a>
                </p>
            </div>
            <div className="icon-container">
                Download CV
                <FileArrowDown size={18} />
            </div>
        </footer>
    );
};
