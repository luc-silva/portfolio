import { Link } from "react-router-dom";

import { HomeLinks } from "../components/Misc/HomeLinks";
import { ArrowRight, FileArrowDown } from "phosphor-react";

import styles from "./Home.module.css";

export const Home = () => {
    return (
        <main role={"main"} className={styles["home"]}>
            <section className={styles["greetings"]}>
                <div className={styles["greetings-main"]}>
                    <strong>Olá, como vai? Me chamo</strong>
                    <div className={styles["greetings-title"]}>
                        <h2>Lucas da Silva Santos</h2>
                        <p>Engenheiro de Software</p>
                    </div>
                </div>
                <div className={styles["buttons"]}>
                    <Link className={styles["project-button"]} to="/projects">
                        Veja meus projetos
                        <ArrowRight size={20} weight="bold" />
                    </Link>
                    <a
                        className={styles["curriculum-button"]}
                        href={require("../assets/lucas-silva-resume.pdf")}
                        download="lucas-silva-cv.pdf"
                    >
                        Baixe o currículo
                        <FileArrowDown size={20} weight="bold" />
                    </a>
                </div>
                <div className={styles["social-accounts"]}>
                    <ul>
                        <HomeLinks />
                    </ul>
                </div>
            </section>
        </main>
    );
};
