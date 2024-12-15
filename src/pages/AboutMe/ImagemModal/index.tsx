import { X } from "phosphor-react";
import styles from "./styles.module.css";
import { useContext } from "react";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const ImageModal = () => {
    const { importModalImage } = useContext(PortfolioContext);

    const { isCertificateModalActive, handleImageModal } =
        useContext(PortfolioContext);

    if (!isCertificateModalActive) {
        return null;
    }

    return (
        <div className={styles["image-modal"]} onClick={handleImageModal}>
            <div
                className={styles["image-container"]}
                onClick={(e) => e.stopPropagation()}
            >
                <X
                    className={styles["close-btn"]}
                    size={30}
                    onClick={handleImageModal}
                />
                <img
                    src={importModalImage()}
                    alt="Certificate"
                    className={styles["zoomed-certificate"]}
                />
            </div>
        </div>
    );
};
