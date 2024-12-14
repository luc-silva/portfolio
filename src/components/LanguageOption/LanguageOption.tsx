import { useEffect, useState } from "react";
import { BR, US } from "country-flag-icons/react/3x2";
import styles from "./LanguageOption.module.css";

export const LanguageOption = ({
    langObject,
    setCurrentOption,
}: {
    langObject: LanguageOptionObject;
    setCurrentOption: React.Dispatch<LanguageOptionObject>;
}) => {
    let [currentIcon, setCurrentIcon] = useState(
        <BR title="United States" height="20px" />
    );
    function handleClick() {
        setCurrentOption(langObject);
    }

    useEffect(() => {
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
    }, [langObject]);

    return (
        <div className={styles["language-card"]} onClick={handleClick}>
            {currentIcon}
            {langObject.text}
        </div>
    );
};
