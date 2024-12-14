import { useContext, useEffect } from "react";
import { PortfolioContext } from "../../../../context/PortfolioProvider";
import { certificates } from "../../../../data";
import { CaretLeft, CaretRight } from "phosphor-react";
import styles from "./styles.module.css";

interface IProps {
    orientation: "left" | "right";
    counter: number;
    setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const PageButton = ({ orientation, counter, setCounter }: IProps) => {
    const { setModalImage } = useContext(PortfolioContext);

    useEffect(() => {
        setModalImage(certificates[counter].certImage);
    }, [counter, setModalImage]);

    function goUp() {
        if (counter !== certificates.length - 1) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }
    function goBack() {
        if (counter > 0) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }

    return (
        <div
            role="button"
            className={styles["cert-button"]}
            onClick={orientation === "left" ? goBack : goUp}
        >
            {orientation === "left" ? (
                <CaretRight
                    size={50}
                    weight="thin"
                    color="var(--text-color )"
                />
            ) : (
                <CaretLeft size={50} weight="thin" color="var(--text-color )" />
            )}
        </div>
    );
};
