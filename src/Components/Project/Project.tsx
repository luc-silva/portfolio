import styles from "./Project.module.css";
import { ProjectCard } from "./ProjectCard";
import { ProjectSkills } from "./ProjectSkills";

interface project {
    projectTitle: string;
    projectLink: string;
    projectImages: string[];
    projectTags: string[];
}
interface knowTool {
    name: string;
    toolImage: string;
    additionalInfo: string;
}

export const Project = () => {
    const projects: project[] = [
        {
            projectTitle: "Todo Manager",
            projectLink: "https://github.com/luc-silva/to-do",
            projectImages: [
                "project-todo-1.png",
                "project-todo-2.png",
                "project-todo-3.png",
            ],
            projectTags: ["JS", "HTML", "CSS"],
        },
        {
            projectTitle: "Weather App",
            projectLink: "https://github.com/luc-silva/weather-app",
            projectImages: [
                "project-weatherapp-1.png",
                "project-weatherapp-2.png",
            ],
            projectTags: ["JS", "HTML", "CSS"],
        },
        {
            projectTitle: "Restaurant Page",
            projectLink: "https://github.com/luc-silva/restaurant-page",
            projectImages: [
                "project-restaurant-1.png",
                "project-restaurant-2.png",
                "project-restaurant-3.png",
                "project-restaurant-4.png",
                "project-restaurant-5.png",
            ],
            projectTags: ["JS", "ReactJS", "HTML", "CSS"],
        },
    ];

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
                        Projetos os quais botei em pratica tudo que venho
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
                            }: project,
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
