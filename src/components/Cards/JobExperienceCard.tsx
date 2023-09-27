import styles from "./JobExperienceCard.module.css";

export const JobExperienceCard = () => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card__title"]}>
                <strong>Software Engineer</strong>
                <div className={styles["card__title__display"]}>
                    <strong>Microsoft</strong>
                    <div className={styles["display__period"]}>
                        <p>12/3/2000</p>
                        <span>•</span>
                        <p>12/3/2000</p>
                    </div>
                </div>
            </div>
            <div className={styles["card__about"]}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Minima aut, dolorum optio aliquid nostrum recusandae est!
                    Placeat perferendis earum repellendus ratione tempore, sunt
                    unde? Accusamus voluptas suscipit architecto illum cum?
                </p>
                <ul className={styles["card__about__featured"]}>
                    <li>Accusamus voluptas suscipit architecto illum</li>
                    <li>Accusamus voluptas suscipit architecto illum</li>
                    <li>Accusamus voluptas suscipit architecto illum</li>
                    <li>Accusamus voluptas suscipit architecto illum</li>
                    <li>Accusamus voluptas suscipit architecto illum</li>
                </ul>
                <div className={styles["card__about__skills"]}>
                    Javascript, React, Java, Spring
                </div>
            </div>
        </div>
    );
};
