import styles from "./CertificationItem.module.css";
import { ArrowSquareOut } from "phosphor-react";

interface certificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    courseCompletitionDate: string;
    courseLength: number;
}
interface props extends certificate {}

export const CertificationItem = ({ cert }: { cert: props }) => {
    let {
        tags,
        certImage,
        courseName,
        schoolName,
        schoolSite,
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
                                    return <li>{tag},</li>;
                                } else {
                                    return <li>{tag}</li>;
                                }
                            })}
                        </ul>
                    </div>
                    <div className={styles["details-info"]}>
                        <div>
                            <strong>Concluido:</strong>
                            <em>{courseCompletitionDate}</em>
                        </div>
                        <div>
                            <strong>Carga Horaria:</strong>
                            <em>{courseLength}</em>
                        </div>
                    </div>
                </div>

                <button className={styles["details-external-link"]}>
                    <a href={schoolSite}>
                        Link para o site
                        <ArrowSquareOut size={20} />
                    </a>
                </button>
            </div>
            <img
                className={styles["certificate-image"]}
                src={require(`../../Images/${certImage}`)}
            ></img>
        </div>
    );
};
