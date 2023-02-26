import { CaretRight, CaretLeft } from "phosphor-react";
import { CertificateItem } from "./CertificateItem";

import styles from "./AboutMeCertificates.module.css";

interface certificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    additionalInfo: string;
    courseCompletitionDate: string;
    courseLength: number;
}
interface CertificatesSectionProps {
    certificates: certificate[];
    counter: number;
    handleModal: Function;
    handleModalImage: Function;
    goBack: Function;
    goUp: Function;
}

export const AboutMeCertificates = ({
    certificates,
    counter,
    handleModal,
    handleModalImage,
    goBack,
    goUp,
}: CertificatesSectionProps) => {
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
