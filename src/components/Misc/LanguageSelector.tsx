import { useState, useEffect, useContext } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import { languageOptions } from "../../constants/languagesOptions";
import { LanguageContext } from "../../context/LanguageProvider";
import { LanguageOption } from "../Cards/LanguageOption";
import styles from "./LanguageSelector.module.css";

export const LanguageSelector = () => {
    let { lang: currentLangOption, changeLang: setCurrentLangOption } =
        useContext(LanguageContext);

    let [screnSize, setScreenSize] = useState(window.innerWidth);
    let [isOptionsActive, toggleOptions] = useState(false);

    function handleSelectorClick() {
        toggleOptions(!isOptionsActive);
    }

    useEffect(() => {
        setScreenSize(window.innerWidth);
    }, [window.innerWidth]);

    return (
        <div className={styles["language-selector"]}>
            <div
                className={styles["language-selector__container"]}
                onClick={handleSelectorClick}
            >
                <LanguageOption
                    langObject={currentLangOption}
                    setCurrentOption={setCurrentLangOption}
                />
                {(isOptionsActive && <CaretUp size={32} weight="fill" />) || (
                    <CaretDown size={32} weight="fill" />
                )}
            </div>
            {isOptionsActive && (
                <div className={styles["language-selector__options"]}>
                    {languageOptions
                        .filter(
                            (item: LanguageOptionObject) =>
                                item.value != currentLangOption.value
                        )
                        .map((item, index) => (
                            <LanguageOption
                                langObject={item}
                                setCurrentOption={setCurrentLangOption}
                                key={index}
                            />
                        ))}
                </div>
            )}
        </div>
    );
};
