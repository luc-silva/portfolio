import { useCallback, useMemo, useState } from "react";
import { languageOptions } from "../constants/languagesOptions";

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

    const importImageFromPath = (path: string) => {
        return `${process.env.PUBLIC_URL}/images/${path}`;
    };

    const importModalImage = useCallback(() => {
        return importImageFromPath(modalImage || "");
    }, [modalImage]);

    const [currentLanguageData, setCurrentLanguage] = useState<
        (typeof languageOptions)[0] | null
    >(languageOptions[0]);

    const language = useMemo(() => {
        if (currentLanguageData) {
            return currentLanguageData.value;
        }

        return "pt_br";
    }, [currentLanguageData]);

    return {
        isCertificateModalActive,
        importImageFromPath,
        isHeaderMenuActive,
        modalImage,
        setModalImage,
        handleImageModal,
        handleMenuModal,
        currentLanguageData,
        setCurrentLanguage,
        language,
        importModalImage,
    };
};
