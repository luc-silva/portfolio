import { useCallback, useState } from "react";

export const usePortfolio = () => {
    const [isCertificateModalActive, setIsCertificateModal] = useState(false);
    const [isHeaderMenuActive, setIsHeaderMenuActive] = useState(false);
    const [modalImage, setModalImage] = useState<null | string>(null);

    const handleImageModal = useCallback(() => {
        setIsCertificateModal(!isCertificateModalActive);
    }, [isCertificateModalActive, setIsCertificateModal]);

    const handleMenuModal = useCallback(() => {
        setIsHeaderMenuActive(!isHeaderMenuActive);
    }, [isHeaderMenuActive]);

    const importImageFromPath = useCallback(() => {
        return require(`../assets/images/${modalImage}`);
    }, [modalImage]);

    return {
        isCertificateModalActive,
        importImageFromPath,
        isHeaderMenuActive,
        modalImage,
        setModalImage,
        handleImageModal,
        handleMenuModal,
    };
};
