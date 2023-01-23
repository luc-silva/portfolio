import { ArrowSquareOut } from "phosphor-react"
import styles from "./HeaderExternalBtn.module.css"

export const HeaderExternalBtn = () => {
    return (
        <div className={styles["header-external-btn"]}>
            <a href="https://www.linkedin.com/in/silva-luc/" target={"_blank"}>
                LinkedIn
                <ArrowSquareOut size={18} />
            </a>
        </div>
    );
};
