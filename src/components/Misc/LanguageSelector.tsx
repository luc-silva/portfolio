import { ChangeEvent, useContext, useState, useEffect } from "react";
import { LanguageContext } from "../../Utils/LanguageContext";

import styles from "./LanguageSelector.module.css";
import { LanguageOption } from "../Cards/LanguageOption";
import { languageOptions } from "../../constants/languagesOptions";
import { CaretDown, CaretUp } from "phosphor-react";

export const LanguageSelector = () => {
    let { lang, changeLang } = useContext(LanguageContext);
    let [isOptionsActive, toggleOptions] = useState(false);
    let [currentLangOption, setCurrentLangOption] = useState(
        languageOptions[0]
    );

    function handleSelectorClick() {
        toggleOptions(!isOptionsActive);
    }

    useEffect(() => {
        changeLang(currentLangOption.value);
    }, [currentLangOption]);

    return (
        <div className={styles["language-selector"]}>
            <div
                className={styles["language-selector__container"]}
                onClick={handleSelectorClick}
            >
                <div className={styles["language-selector__current"]}>
                    {currentLangOption.icon}
                    {currentLangOption.text}
                </div>
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
