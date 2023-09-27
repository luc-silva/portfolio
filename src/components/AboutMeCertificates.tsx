import { CertificateItem } from "./CertificateItem";
import { useContext, useEffect, useState } from "react";
import { CaretRight, CaretLeft } from "phosphor-react";
import { certificates } from "../data";
import styles from "./AboutMeCertificates.module.css";
import { LanguageContext } from "../Utils/LanguageContext";
import { certificatesText } from "../constants/page-texts";

export const AboutMeCertificates = ({
    toggleImageModal,
    setModalImage,
}: {
    toggleImageModal: Function;
    setModalImage: Function;
}) => {
    let [counter, setCounter] = useState(0);
    let {lang} = useContext(LanguageContext)

    useEffect(() => {
        setModalImage(certificates[counter].certImage);
    }, [counter, setModalImage]);
    function goUp() {
        if (counter !== certificates.length - 1) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }
    function goBack() {
        if (counter > 0) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }
    return (
        <section className={styles["aboutme-certificates"]}>
            <div className={styles["certificates-main"]}>
                <h2>{certificatesText.page_title[lang]}</h2>
                <p>{certificatesText.page_subtitle[lang]}</p>
            </div>
            <div className={styles["certificates-container"]}>
                <div
                    role="button"
                    className={styles["cert-button"]}
                    onClick={() => {
                        goBack();
                    }}
                >
                    <CaretLeft
                        size={50}
                        weight="thin"
                        color="var(--text-color )"
                    />
                </div>
                <CertificateItem
                    cert={certificates[counter]}
                    toggleImageModal={toggleImageModal}
                />
                <div
                    role="button"
                    className={styles["cert-button"]}
                    onClick={() => {
                        goUp();
                    }}
                >
                    <CaretRight
                        size={50}
                        weight="thin"
                        color="var(--text-color "
                    />
                </div>
            </div>
        </section>
    );
};
