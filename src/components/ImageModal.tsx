import { X } from "phosphor-react";
import styles from "./ImageModal.module.css";
import { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioProvider";

export const ImageModal = () => {
    const { importImageFromPath } = useContext(PortfolioContext);

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
                    src={importImageFromPath()}
                    alt="Certificate"
                    className={styles["zoomed-certificate"]}
                />
            </div>
        </div>
    );
};
