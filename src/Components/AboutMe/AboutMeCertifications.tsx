import { CaretRight, CaretLeft } from "phosphor-react";
import { CertificationItem } from "./CertificationItem";

import styles from "./AboutMeCertifications.module.css";

interface certificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    courseCompletitionDate: string;
    courseLength: number;
}
interface CertifcationsSectionProps {
    certificates: certificate[];
    counter: number;
    handleModal: Function
    handleModalImage: Function
    goBack: Function
    goUp: Function
}

export const AboutMeCertifications = ({
    certificates,
    counter,
    handleModal,
    handleModalImage,
    goBack,
    goUp,
} : CertifcationsSectionProps ) => {
    return (
        <div className={styles["aboutme-certification"]}>
            <div className={styles["certification-main"]}>
                <h2>Certificações</h2>
                <p>Clique na imagem do certificado para dar zoom</p>
            </div>
            <div className={styles["certification-container"]}>
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
                        color="var(--gray-700)"
                    />
                </div>
                <CertificationItem
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
                        color="var(--gray-700)"
                    />
                </div>
            </div>
        </div>
    );
};
