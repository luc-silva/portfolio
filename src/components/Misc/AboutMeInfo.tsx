import { useContext } from "react";
import { aboutMeInfoText, aboutMeText } from "../../constants/page-texts";

import { AboutMeContactInfo } from "../Texts/AboutMeContactInfo";
import { LanguageContext } from "../../Utils/LanguageContext";

import { Download } from "phosphor-react";
import styles from "./AboutMeInfo.module.css";

export const AboutMeInfo = () => {
    let { lang } = useContext(LanguageContext);
    let url = `${process.env.PUBLIC_URL}/lucas-silva-resume.pdf`;

    return (
        <>
            <div className={styles["aboutme-info"]}>
                <div className={styles["aboutme-title"]}>
                    <h2>{aboutMeInfoText.page_title[lang]}</h2>
                    <p>{aboutMeInfoText.page_subtitle[lang]}</p>
                </div>
                <div className={styles["aboutme-about"]}>
                    <div className={styles["about-text"]}>
                        {aboutMeText.about[lang].map((item) => {
                            return <p>{item}</p>;
                        })}
                    </div>
                    <div className={styles["about-resume"]}>
                        <Download size={24} />
                        <a href={url} download="lucas-silva-resume.pdf">
                            {aboutMeInfoText.ctc_cv[lang]}
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles["aboutme-contact"]}>
                <div className={styles["contact-title"]}>
                    <h3>{aboutMeInfoText.contact[lang]}</h3>
                    <p>{aboutMeInfoText.city[lang]}</p>
                </div>
                <div className={styles["contact-info"]}>
                    <AboutMeContactInfo />
                </div>
            </div>
        </>
    );
};
