import styles from "./Project.module.css";
import { projects, IProject } from "../data";
import { ProjectCard } from "../components/ProjectCard";

export const Project = () => {
    return (
        <section className={styles["projects"]}>
            {/* page for detail projects, articles and activities (hackatons, CTF and so on). statistics should be in about me */}
            <div className={styles["projects-about"]}>
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
