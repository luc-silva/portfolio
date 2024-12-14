import { useState, useContext } from "react";
import { CaretDown, CaretUp } from "phosphor-react";
import { LanguageOption } from "../../LanguageOption";
import { languageOptions } from "../../../constants/languagesOptions";
import { PortfolioContext } from "../../../context/PortfolioProvider";
import styles from "./styles.module.css";

export const LanguageSelector = () => {
    const { currentLanguageData } = useContext(PortfolioContext);

    const [isOptionsActive, toggleOptions] = useState(false);

    function handleSelectorClick() {
        toggleOptions(!isOptionsActive);
    }

    if (!currentLanguageData) return null;

    return (
        <div className={styles["language-selector"]}>
            <div
                className={styles["language-selector__container"]}
                onClick={handleSelectorClick}
            >
                {/* criar dispaly */}
                <LanguageOption langObject={currentLanguageData} />

                {(isOptionsActive && <CaretUp size={32} weight="fill" />) || (
                    <CaretDown size={32} weight="fill" />
                )}
            </div>
            {isOptionsActive && (
                <div className={styles["language-selector__options"]}>
                    {languageOptions
                        .filter(
                            (item: LanguageOptionObject) =>
                                item.value !== currentLanguageData.value
                        )
                        .map((item, index) => (
                            <LanguageOption langObject={item} key={index} />
                        ))}
                </div>
            )}
        </div>
    );
};
