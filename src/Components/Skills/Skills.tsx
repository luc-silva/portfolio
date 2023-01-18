import styles from "./Skills.module.css";

export const Skills = () => {
    return (
        <section id="skills" className={styles["portfolio-skills"]}>
            <div className={styles["skills-title"]}>
                <h2>Skills</h2>
            </div>
            <div className={styles["skills-container"]}>
                <div className={styles["list-container"]}>
                    <h3>Tech</h3>
                    <ul className={styles["item-list"]}>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>Python</li>
                        <li>Shell Scripting</li>
                    </ul>
                </div>
                <div>
                    <h3>Tools</h3>
                    <ul>
                        <li>VSCode</li>
                        <li>Ubuntu</li>
                        <li>Webpack</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
