import { useContext } from "react";
import { LanguageContext } from "../../Utils/LanguageContext";  
import { projectCardTitleDisplayText } from "../../constants/page-texts";
import styles from "./ProjectCardTitleDisplay.module.css";

export const ProjectCardTitleDisplay = ({
    tags,
    title,
    containsApi,
}: {
    title: string;
    tags: string[];
    containsApi?: boolean;
}) => {
    let {lang} = useContext(LanguageContext)
    return (
        <>
            <div>
                <div className={styles["title"]}>{title}</div>
                <div className={styles["tags"]}>{tags.join(", ")}</div>
            </div>
            {containsApi && (
                <div className={styles["api-mark"]}>{projectCardTitleDisplayText.api[lang]}</div>
            )}
        </>
    );
};
