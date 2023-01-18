import { ArrowRight, FileArrowDown } from "phosphor-react";
import styles from "./Home.module.css";

export const Home = () => {
    return (
        <section id="home" className={styles["portfolio-home"]}>
            <div className={styles["home-greetings"]}>
                Ola, me chamo lucas!
                <div className={styles["greetings-buttons"]}>
                    <button className={styles["project-button"]}>
                        See my projects<ArrowRight size={18} />
                    </button>
                    <button className={styles["curriculum-button"]}>
                        Download CV<FileArrowDown size={18} />
                    </button>
                </div>
            </div>
        </section>
    );
};
