import { formatArrayOfStrings } from "../../Utils/tools";
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
    return (
        <>
            <div>
                <div className={styles["title"]}>{title}</div>
                <div className={styles["tags"]}>{tags.join(", ")}</div>
            </div>
            {containsApi && (
                <div className={styles["api-mark"]}>Contém API</div>
            )}
        </>
    );
};
