import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles["portfolio-header"]}>
            <div className={styles["header-logo"]}>
                <span className={styles["logo-name"]}>Lucas da Silva |</span>
                <span className={styles["logo-title"]}>Portfolio</span>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </header>
    );
};
