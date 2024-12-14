import { HomeLinks } from "./HomeLinks/HomeLinks";
import { HomeGreetings } from "./HomeGreetings";
import { HomeButtons } from "./HomeButtons";
import styles from "./styles.module.css";

export const Home = () => {
    return (
        <main role={"main"} className={styles.home}>
            <section className={styles["greetings"]}>
                <div className={styles["greetings-main"]}>
                    <HomeGreetings />
                </div>
                <div className={styles["buttons"]}>
                    <HomeButtons />
                </div>
                <div className={styles["social-accounts"]}>
                    <HomeLinks />
                </div>
            </section>
        </main>
    );
};
