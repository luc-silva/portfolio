import { formatArrayOfStrings } from "../../Utils/tools";
import styles from "./ProjectCardTitleDisplay.module.css";

export const ProjectCardTitleDisplay = ({
    tags,
    title,
}: {
    title: string;
    tags: string[];
}) => {
    return (
        <>
            <div className={styles["title"]}>{title}</div>
            <div className={styles["tags"]}>
                {tags.join(", ")}
            </div>
        </>
    );
};
