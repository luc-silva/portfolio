import styles from "./CertificationItem.module.css";
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
export const CertificationItem = ({
    cert,
    handleModal,
    handleModalImage,
}: {
    cert: certificate;
    handleModal: Function;
    handleModalImage: Function;
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
                                if (index != tags.length - 1) {
                                    return <li  key={index}>{tag},</li>;
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

                <button className={styles["details-external-link"]}>
                    <a href={schoolSite} target="_blank">
                        Link para o site
                        <ArrowSquareOut size={20} />
                    </a>
                </button>
            </div>
            <img
                onClick={() => {
                    handleModalImage(require(`../../Images/${certImage}`));
                    handleModal();
                }}
                className={styles["certificate-image"]}
                src={require(`../../Images/${certImage}`)}
            ></img>
        </div>
    );
};
