import { homeText } from "../../../constants/page-texts";
import { useContext } from "react";
import { LanguageContext } from "../../../context/LanguageProvider";
import styles from "./styles.module.css";

export const HomeGreetings = () => {
    const { lang } = useContext(LanguageContext);

    return (
        <>
            <strong>{homeText.greeting[lang.value]}</strong>
            <div className={styles["greetings-title"]}>
                <h2>Lucas da Silva Santos</h2>
                <p>{homeText.role[lang.value]}</p>
            </div>
        </>
    );
};
