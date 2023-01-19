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
                    <li><a href="/">Home</a></li>
                    <li><a href="/about-me">About Me</a></li>
                    <li><a href="/skills">Skills</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </header>
    );
};
