import { CertificateItem } from "./CertificateItem";
import { useState } from "react";
import { ICertificate } from "../data";

import { CaretRight, CaretLeft } from "phosphor-react"
import styles from "./AboutMeCertificates.module.css";


interface CertificatesSectionProps {
    certificates: ICertificate[];
    handleModal: Function;
    handleModalImage: Function;
}

export const AboutMeCertificates = ({
    certificates,
    handleModal,
    handleModalImage
}: CertificatesSectionProps) => {
    let [counter, setCounter] = useState(0);

    function goUp() {
        if (counter != certificates.length - 1) {
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
                <h2>Certificações</h2>
                <p>Clique na imagem do certificado para dar zoom</p>
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
                        color="var(--text-color-light)"
                    />
                </div>
                <CertificateItem
                    cert={certificates[counter]}
                    handleModal={handleModal}
                    handleModalImage={handleModalImage}
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
                        color="var(--text-color-light)"
                    />
                </div>
            </div>
        </section>
    );
};
