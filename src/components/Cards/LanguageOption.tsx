import styles from "./LanguageOption.module.css";

export const LanguageOption = ({
    langObject,
    setCurrentOption
}: {
    langObject: LanguageOptionObject;
    setCurrentOption: React.Dispatch<LanguageOptionObject>;
}) => {
    function handleClick() {
        setCurrentOption(langObject)
    } 

    return (
        <div className={styles["language-card"]} onClick={handleClick}>
            {langObject.icon}
            {langObject.text}
        </div>
    );
};
