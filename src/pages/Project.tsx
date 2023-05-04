import { MainProjectsDisplay } from "../components/Displays/MainProjectsDisplay";
import { OtherProjectsDisplay } from "../components/Displays/OtherProjectsDisplay";
import styles from "./Project.module.css";

export const Project = () => {
    return (
        <main className={styles["projects"]}>
            {/* page for detail projects, articles and activities (hackatons, CTF and so on). statistics should be in about me */}
            <section className={styles["projects-about"]}>
                <div className={styles["projects-title"]}>
                    <h2>Projetos</h2>
                    <p>
                        Projetos os quais botei em prática tudo que venho
                        aprendendo.
                    </p>
                </div>
            </section>
            <section className={styles["projects-main"]}>
                <MainProjectsDisplay />
            </section>
            <section className={styles["projects-extra"]}>
                <div className={styles["projects-extra-title"]}>
                    <h2>Outros Projetos</h2>
                </div>
                <OtherProjectsDisplay />
            </section>
        </main>
    );
};
