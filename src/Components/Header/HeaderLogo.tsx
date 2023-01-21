import styles from "./HeaderLogo.module.css"

export const HeaderLogo = () => {
    return (
        <div className={styles["header-logo"]}>
            <span className={styles["logo-name"]}>Lucas da Silva</span>
            <span className={styles["logo-title"]}>Portfolio</span>
        </div>
    );
};
