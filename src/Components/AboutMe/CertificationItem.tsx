import styles from "./CertificationItem.module.css";
import { ArrowSquareOut } from "phosphor-react";

export const CertificationItem = () => {
    return (
        <div className={styles["certificate"]}>
            <div className={styles["certificate-details"]}>
                <div>
                    <div className={styles["details-title"]}>
                        <h3>Spread Fullstack Bootcamp</h3>
                        <em>Digital Innovation One</em>
                    </div>
                    <div className={styles["details-tags"]}>
                        <ul>
                            <li>Javascript</li>
                            <li>Typescript</li>
                            <li>HTML & CSS</li>
                            <li>ReactJS</li>
                            <li>Node</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className={styles["details-info"]}>
                        <div>
                            <strong>Concluido:</strong>
                            <em>14/50/2070</em>
                        </div>
                        <div>
                            <strong>Carga Horaria:</strong>
                            <em>70 Horas</em>
                        </div>
                    </div>
                </div>

                <button className={styles["details-external-link"]}>
                    <a href="">
                        Link para o site
                        <ArrowSquareOut size={20}  />
                    </a>
                </button>
            </div>
            <img
                className={styles["certificate-image"]}
                src={require("../../Images/cert-basicwebdev.jpg")}
            ></img>
        </div>
    );
};
