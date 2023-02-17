import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";
import { ProjectSkills } from "./ProjectSkills";
import { projects, IProject } from "../../data";

export const Project = () => {
    return (
        <section id="projects" className={styles["portfolio-projects"]}>
            {/* page for detail projects, articles and activities (hackatons, CTF and so on). statistics should be in about me */}

            <div className={styles["project-skills"]}>
                <div className={styles["project-main"]}>
                    <h2>Skills & Ferramentas</h2>
                    <p>Ferramentas as quais utilizo ou tenho algum tipo de experiência</p>
                </div>
                <ProjectSkills />
            </div>
            <div className={styles["project-projects"]}>
                <div className={styles["projects-title"]}>
                    <h2>Projetos</h2>
                    <p>
                        Projetos os quais botei em prática tudo que venho
                        aprendendo
                    </p>
                </div>
                <div className={styles["projects-container"]}>
                    {projects.map(
                        (
                            {
                                projectTitle,
                                projectLink,
                                projectImages,
                                projectTags,
                            }: IProject,
                            index: number
                        ) => {
                            return (
                                <ProjectCard
                                    projectTitle={projectTitle}
                                    projectLink={projectLink}
                                    projectImages={projectImages}
                                    projectTags={projectTags}
                                    key={index}
                                />
                            );
                        }
                    )}
                </div>
            </div>
        </section>
    );
};
