import { FileArrowDown } from "phosphor-react";
import styles from "./CurriculumButton.module.css";

export const CurriculumButton = ({ text }: { text: string }) => {
    let url = `${process.env.PUBLIC_URL}/lucas-silva-resume.pdf`;

    function handleClick() {
        window.open(url, "download");
    }

    return (
        <button className={styles["download-btn"]} onClick={handleClick}>
            {text}
            <FileArrowDown size={20} weight="bold" />
        </button>
    );
};
