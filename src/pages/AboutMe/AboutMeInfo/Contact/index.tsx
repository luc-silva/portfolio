import { useContext } from "react";
import { aboutMeInfoText } from "../../../../constants/page-texts";
import { PortfolioContext } from "../../../../context/PortfolioProvider";
import { Envelope, LinkedinLogo } from "phosphor-react";
import styles from "./styles.module.css";

export const Contact = () => {
    const { language } = useContext(PortfolioContext);
    return (
        <>
            <div className={styles["contact-title"]}>
                <h3>{aboutMeInfoText.contact[language]}</h3>
                <p>{aboutMeInfoText.city[language]}</p>
            </div>
            <div className={styles["contact-info"]}>
                <div>
                    <LinkedinLogo size={20} color={"var(--main-color)"} />
                    Linkedin: luc-silva
                </div>
                <div>
                    <Envelope size={20} color={"var(--main-color)"} />
                    Email: lucas.silva1203@outlook.com
                </div>
            </div>
        </>
    );
};
