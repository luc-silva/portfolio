import styles from "./ProjectSkills.module.css";
import { knowTools, IKnowTool } from "../../data";

export const ProjectSkills = () => {    
    return (
        <ul className={styles["skills-about"]}>
            {knowTools.map(
                ({ name, toolImage, additionalInfo }: IKnowTool, index) => {
                    return (
                        <li key={index}>
                            <img
                                loading="lazy"
                                src={require(`../../Images/${toolImage}`)}
                                alt={"Logotipo do " + name}
                            />
                            <p>{name}</p>
                            {additionalInfo && <em>{additionalInfo}</em>}
                        </li>
                    );
                }
            )}
        </ul>
    );
};
