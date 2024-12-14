import { homeText } from "../../../constants/page-texts";
import { useContext } from "react";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const HomeGreetings = () => {
    const { language } = useContext(PortfolioContext);
    console.log({ language });
    return (
        <>
            <strong>{homeText.greeting[language]}</strong>
            <div className={styles["greetings-title"]}>
                <h2>Lucas da Silva Santos</h2>
                <p>{homeText.role[language]}</p>
            </div>
        </>
    );
};
