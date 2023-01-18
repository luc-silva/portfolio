import styles from "./Home.module.css"

export const Home = () => {
    return (
        <div id="home" className={styles["portfolio-home"]}>
            <div className={styles["home-greetings"]}>
                Ola, me chamo lucas!
            </div>
        </div>
    );
};
