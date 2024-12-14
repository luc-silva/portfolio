import { useContext, useState } from "react";
import { certificates } from "../../../../data";
import { CertificateItem } from "../CertificateItem";
import { PageButton } from "../PageButton";
import { PortfolioContext } from "../../../../context/PortfolioProvider";

export const CertificationContainer = () => {
    const { handleImageModal } = useContext(PortfolioContext);
    const [counter, setCounter] = useState(0);

    return (
        <>
            <PageButton
                orientation="left"
                counter={counter}
                setCounter={setCounter}
            />
            <CertificateItem
                cert={certificates[counter]}
                toggleImageModal={handleImageModal}
            />
            <PageButton
                orientation="right"
                counter={counter}
                setCounter={setCounter}
            />
        </>
    );
};
