import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";

interface project {
    projectTitle: string;
    projectLink: string;
    projectImages: string[];
    projectTags: string[];
}

export const Project = () => {
    const projects: project[] = [
        {
            projectTitle: "Restaurant Page",
            projectLink: "",
            projectImages: ["", ""],
            projectTags: ["", ""],
        },
    ];

    return (
        <section id="projects" className={styles["portfolio-projects"]}>
            {/* page for projects, articles and activities (hackatons, CTF and so on) */}

            <div className={styles["project-skills"]}>
                <div>
                    <h2>Skills</h2>
                    <p>Ferramentas as quais utilizo</p>
                </div>
                <div className={styles["skills-about"]}></div>
            </div>
            <div className={styles["project-projects"]}>
                <div className={styles["projects-title"]}>
                    <h2>Projetos</h2>
                    <p>
                        Projetos os quais botei em pratica tudo que venho
                        aprendendo
                    </p>
                </div>
                <div className={styles["projects-container"]}>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
            </div>
        </section>
    );
};
