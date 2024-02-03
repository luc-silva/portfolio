import { useContext } from "react"; 
import { certifacateDisplayText } from "../constants/page-texts";

import { ArrowSquareOut } from "phosphor-react";
import styles from "./CertificateItem.module.css";
import { LanguageContext } from "../context/LanguageProvider";

export const CertificateItem = ({
    cert,
    toggleImageModal,
}: {
    toggleImageModal: Function;
    cert: ICertificate;
}) => {
    let {
        tags,
        certImage,
        name,
        additional_info,
        company,
        company_site,
        completition_date,
        info_active,
        length,
    } = cert;

    let { lang } = useContext(LanguageContext);

    return (
        <div className={styles["certificate"]}>
            <div className={styles["certificate-details"]}>
                <div>
                    <div className={styles["details-title"]}>
                        <h3>{name[lang.value]}</h3>
                        <em>{company}</em>
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
                            <strong>{certifacateDisplayText.date[lang.value]}</strong>
                            <em>{completition_date}</em>
                        </div>
                        <div>
                            <strong>
                                {certifacateDisplayText.course_length[lang.value]}
                            </strong>
                            <em>{length}h</em>
                        </div>
                        {info_active && (
                            <div>
                                <em>{additional_info[lang.value]}</em>
                            </div>
                        )}
                    </div>
                </div>

                <a
                    className={styles["details-external-link"]}
                    href={company_site}
                    target="_blank"
                    rel="noreferrer"
                >
                    {certifacateDisplayText.external_link_btn[lang.value]}
                    <ArrowSquareOut size={20} />
                </a>
            </div>
            <img 
                alt="Certificate"
                className={styles["certificate-image"]}
                onClick={() => {
                    toggleImageModal();
                }}
                src={require(`../assets/images/${certImage}`)}
            />
        </div>
    );
};
