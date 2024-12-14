import { useContext } from "react";
import { aboutMeInfoText, aboutMeText } from "../../../../constants/page-texts";
import { PortfolioContext } from "../../../../context/PortfolioProvider";
import { Download } from "phosphor-react";
import styles from "./styles.module.css";

export const Info = () => {
    const { language } = useContext(PortfolioContext);
    const url = `${process.env.PUBLIC_URL}/lucas-silva-resume.pdf`;

    return (
        <>
            <div className={styles["aboutme-title"]}>
                <h2>{aboutMeInfoText.page_title[language]}</h2>
                <p>{aboutMeInfoText.page_subtitle[language]}</p>
            </div>
            <div className={styles["aboutme-about"]}>
                <div className={styles["about-text"]}>
                    {aboutMeText.about[language].map((item) => {
                        return <p>{item}</p>;
                    })}
                </div>
                <div className={styles["about-resume"]}>
                    <Download size={24} />
                    <a href={url} download="lucas-silva-resume.pdf">
                        {aboutMeInfoText.ctc_cv[language]}
                    </a>
                </div>
            </div>
        </>
    );
};
