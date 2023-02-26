import styles from "./ProjectSkills.module.css";
import { knowTools, IKnowTool } from "../data";

export const ProjectSkills = () => {
    return (
        <section className={styles["skills"]}>
            <div className={styles["skills-title"]}>
                <h2>Skills & Ferramentas</h2>
                <p>
                    Ferramentas as quais utilizo ou possuo algum tipo de
                    experiência
                </p>
            </div>
            <ul className={styles["skills-container"]}>
                {knowTools.map(
                    ({ name, toolImage, additionalInfo }: IKnowTool, index) => {
                        return (
                            <li key={index}>
                                <img
                                    loading="lazy"
                                    src={require(`../assets/images/${toolImage}`)}
                                    alt={"Logotipo do " + name}
                                />
                                <p>{name}</p>
                                {additionalInfo && <em>{additionalInfo}</em>}
                            </li>
                        );
                    }
                )}
            </ul>
        </section>
    );
};
