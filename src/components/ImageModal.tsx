import { X } from "phosphor-react";
import styles from "./ImageModal.module.css";

export const ImageModal = ({
    isActive,
    toggleModal,
    image,
}: {
    isActive: boolean;
    toggleModal: Function;
    image: string;
}) => {
    function getImage(image: string) {
        return require(`../assets/images/${image}`);
    }
    if (isActive) {
        return (
            <div
                className={styles["image-modal"]}
                onClick={() => {
                    toggleModal();
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
                            toggleModal();
                        }}
                    />
                    <img
                        src={getImage(image)}
                        alt="Certificate"
                        className={styles["zoomed-certificate"]}
                    />
                </div>
            </div>
        );
    }
    return null;
};
