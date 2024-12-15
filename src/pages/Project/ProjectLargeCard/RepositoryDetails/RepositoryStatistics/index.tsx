import { Eye, GitFork, Star } from "phosphor-react";
import styles from "./styles.module.css";

export const RepositoryStatistics = ({
    repository: { watchers, stargazers_count, forks },
}: {
    repository: GithubRepository;
}) => {
    return (
        <div className={styles["repo-statistics"]}>
            <div className={styles["repo-icons"]}>
                {watchers}
                <Eye size={24} weight="regular" />
            </div>
            <div className={styles["repo-icons"]}>
                {stargazers_count}
                <Star size={24} weight="regular" />
            </div>
            <div className={styles["repo-icons"]}>
                {forks}
                <GitFork size={24} weight="regular" />
            </div>
        </div>
    );
};
