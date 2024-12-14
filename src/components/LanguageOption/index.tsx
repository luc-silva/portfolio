import { useContext, useEffect, useState } from "react";
import { BR, US } from "country-flag-icons/react/3x2";
import { PortfolioContext } from "../../context/PortfolioProvider";
import styles from "./styles.module.css";

export const LanguageOption = ({
    langObject,
}: {
    langObject: LanguageOptionObject | null;
}) => {
    const { setCurrentLanguage } = useContext(PortfolioContext);

    const [currentIcon, setCurrentIcon] = useState(
        <BR title="United States" height="20px" />
    );
    function handleClick() {
        setCurrentLanguage(langObject);
    }

    useEffect(() => {
        if (langObject) {
            switch (langObject.value) {
                case "pt_br":
                    setCurrentIcon(<BR title="United States" height="20px" />);
                    break;
                case "en_us":
                    setCurrentIcon(<US title="United States" height="20px" />);
                    break;
                default:
                    setCurrentIcon(<BR title="United States" height="20px" />);
                    break;
            }
        }
    }, [langObject]);

    if (!langObject) return null;

    return (
        <div className={styles["language-card"]} onClick={handleClick}>
            {currentIcon}
            {langObject.text}
        </div>
    );
};
