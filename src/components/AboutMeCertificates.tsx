import { CertificateItem } from "./CertificateItem";
import { useEffect, useState } from "react";
import { ICertificate } from "../data";

import { CaretRight, CaretLeft } from "phosphor-react";
import styles from "./AboutMeCertificates.module.css";
import { certificates } from "../data";

export const AboutMeCertificates = (
    { toggleImageModal,  setModalImage }:
    { toggleImageModal: Function,  setModalImage:Function }
) => {
    let [counter, setCounter] = useState(0);
    useEffect(() => {
        setModalImage(certificates[counter].certImage)
    },[counter])
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
                        color="var(--text-color )"
                    />
                </div>
                <CertificateItem cert={certificates[counter]} toggleImageModal={toggleImageModal}/>
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
