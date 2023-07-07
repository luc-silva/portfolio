import styles from "./CertificateItem.module.css";
import { ArrowSquareOut } from "phosphor-react";

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
export const CertificateItem = ({
    cert,
    toggleImageModal,
}: {
    toggleImageModal: Function;
    cert: certificate;
}) => {
    let {
        tags,
        certImage,
        courseName,
        schoolName,
        schoolSite,
        additionalInfo,
        courseCompletitionDate,
        courseLength,
    } = cert;
    return (
        <div className={styles["certificate"]}>
            <div className={styles["certificate-details"]}>
                <div>
                    <div className={styles["details-title"]}>
                        <h3>{courseName}</h3>
                        <em>{schoolName}</em>
                    </div>
                    <div className={styles["details-tags"]}>
                        <ul>
                            {tags.map((tag: string, index: number) => {
                                if (index !== tags.length - 1) {
                                    return <li key={index}>{tag},</li>;
                                } else {
                                    return <li key={index}>{tag}</li>;
                                }
                            })}
                        </ul>
                    </div>
                    <div className={styles["details-info"]}>
                        <div>
                            <strong>Concluído em:</strong>
                            <em>{courseCompletitionDate}</em>
                        </div>
                        <div>
                            <strong>Carga Horaria:</strong>
                            <em>{courseLength} horas</em>
                        </div>
                        {additionalInfo && (
                            <div>
                                <em>{additionalInfo}</em>
                            </div>
                        )}
                    </div>
                </div>

                <a
                    className={styles["details-external-link"]}
                    href={schoolSite}
                    target="_blank"
                    rel="noreferrer"
                >
                    Link para o site
                    <ArrowSquareOut size={20} />
                </a>
            </div>
            <img
                alt=""
                className={styles["certificate-image"]}
                onClick={() => {
                    toggleImageModal();
                }}
                src={require(`../assets/images/${certImage}`)}
            ></img>
        </div>
    );
};
