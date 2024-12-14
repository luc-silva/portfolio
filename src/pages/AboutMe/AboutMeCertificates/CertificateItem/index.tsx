import { ArrowSquareOut } from "phosphor-react";
import { useContext, useMemo } from "react";
import styles from "./styles.module.css";
import { certifacateDisplayText } from "../../../../constants/page-texts";
import { PortfolioContext } from "../../../../context/PortfolioProvider";

export const CertificateItem = ({
    cert,
    toggleImageModal,
}: {
    toggleImageModal: Function;
    cert: ICertificate;
}) => {
    const {
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

    const { language } = useContext(PortfolioContext);

    const image = useMemo(() => {
        if (certImage) {
            return `${process.env.PUBLIC_URL}/images/${certImage}`;
        }
    }, [certImage]);

    return (
        <div className={styles["certificate"]}>
            <div className={styles["certificate-details"]}>
                <div>
                    <div className={styles["details-title"]}>
                        <h3>{name[language]}</h3>
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
                            <strong>
                                {certifacateDisplayText.date[language]}
                            </strong>
                            <em>{completition_date}</em>
                        </div>
                        <div>
                            <strong>
                                {
                                    certifacateDisplayText.course_length[
                                        language
                                    ]
                                }
                            </strong>
                            <em>{length}h</em>
                        </div>
                        {info_active && (
                            <div>
                                <em>{additional_info[language]}</em>
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
                    {certifacateDisplayText.external_link_btn[language]}
                    <ArrowSquareOut size={20} />
                </a>
            </div>
            <img
                alt="Certificate"
                className={styles["certificate-image"]}
                onClick={() => {
                    toggleImageModal();
                }}
                src={image}
            />
        </div>
    );
};
