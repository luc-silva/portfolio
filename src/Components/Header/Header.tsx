import { ArrowSquareOut } from "phosphor-react";
import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles["portfolio-header"]}>
            <div className={styles["header-logo"]}>
                <span className={styles["logo-name"]}>Lucas da Silva</span>
                <span className={styles["logo-title"]}>Portfolio</span>
            </div>
            <div className={styles["header-link"]}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about-me">About Me</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                </ul>
            </div>
            <div className={styles["header-external-btn"]}>
                <a
                    href="https://www.linkedin.com/in/silva-luc/"
                    target={"_blank"}
                >
                    LinkedIn
                    <ArrowSquareOut size={18} />
                </a>
            </div>
        </header>
    );
};
