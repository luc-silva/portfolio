import { Contact } from "./Contact";
import { Info } from "./Info";
import styles from "./styles.module.css";

export const AboutMeInfo = () => {
    return (
        <>
            <div className={styles["aboutme-info"]}>
                <Info />
            </div>
            <div className={styles["aboutme-contact"]}>
                <Contact />
            </div>
        </>
    );
};
