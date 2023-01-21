import { X } from "phosphor-react";
import styles from "./ImageModal.module.css";

export const ImageModal = ({
    certImage,
    modalActive,
    handleModal,
}: {
    certImage: string;
    modalActive: boolean;
    handleModal: Function;
}) => {
    if (modalActive) {
        return (
            <div
                className={styles["image-modal"]}
                onClick={() => {
                    handleModal();
                }}
            >
                <div
                    className={styles["image-container"]}
                    onClick={(e) => e.stopPropagation()}
                >
                    <X
                        className={styles["close-btn"]}
                        size={30}
                        onClick={() => {
                            handleModal();
                        }}
                    />
                    <img
                        src={certImage}
                        alt="Certificate image"
                        className={styles["zoomed-certificate"]}
                    />
                </div>
            </div>
        );
    }
    return null;
};
