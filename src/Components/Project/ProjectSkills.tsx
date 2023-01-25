import styles from "./ProjectSkills.module.css";
interface knowTool {
    name: string;
    toolImage: string;
    additionalInfo: string;
}
export const ProjectSkills = () => {
    let knowTools = [
        {
            name: "Javascript",
            toolImage: "logo-javascript.png",
            additionalInfo: "",
        },
        {
            name: "Typescript",
            toolImage: "logo-typescript.png",
            additionalInfo: "",
        },
        {
            name: "ReactJS",
            toolImage: "logo-reactjs.png",
            additionalInfo: "",
        },
        {
            name: "Ubuntu (Xubuntu)",
            toolImage: "logo-ubuntu.png",
            additionalInfo: "",
        },
        {
            name: "HTML",
            toolImage: "logo-html.png",
            additionalInfo: "",
        },
        {
            name: "CSS",
            toolImage: "logo-css.png",
            additionalInfo: "",
        },
        {
            name: "SQL",
            toolImage: "logo-sql.png",
            additionalInfo: "Experiência acadêmica.",
        },
        {
            name: "Shell Scripting",
            toolImage: "logo-shell.png",
            additionalInfo: "Experiência acadêmica.",
        },
        {
            name: "Python",
            toolImage: "logo-python.png",
            additionalInfo: "Experiência acadêmica.",
        },
    ];
    return (
        <ul className={styles["skills-about"]}>
            {knowTools.map(
                ({ name, toolImage, additionalInfo }: knowTool, index) => {
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
