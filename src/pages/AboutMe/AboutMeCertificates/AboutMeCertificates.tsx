import { useContext } from "react";
import { certificatesText } from "../../../constants/page-texts";
import { CertificationContainer } from "./CertificationContainer";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const AboutMeCertificates = () => {
    const { language } = useContext(PortfolioContext);

    return (
        <section className={styles["aboutme-certificates"]}>
            <div className={styles["certificates-main"]}>
                <h2>{certificatesText.page_title[language]}</h2>
                <p>{certificatesText.page_subtitle[language]}</p>
            </div>
            <div className={styles["certificates-container"]}>
                <CertificationContainer />
            </div>
        </section>
    );
};
