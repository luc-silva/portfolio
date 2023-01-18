import { ArrowRight, FileArrowDown } from "phosphor-react";
import styles from "./Home.module.css";

export const Home = () => {
    return (
        <section id="home" className={styles["portfolio-home"]}>
            <div className={styles["home-greetings"]}>
                <div className={styles["greetings-title"]}>
                    <strong>Hello there!</strong>
                    <h2>My name is Lucas Santos</h2>
                    <p>Software Engineering Student</p>
                </div>

                <div className={styles["greetings-buttons"]}>
                    <a className={styles["project-button"]} href="#projects">
                        See my projects
                        <ArrowRight size={18} />
                    </a>
                    <a
                        className={styles["curriculum-button"]}
                        href=""
                        download="Curriculum Vitae.pdf"
                    >
                        Download CV
                        <FileArrowDown size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};
