import { ChangeEvent, useContext } from "react";
import { LanguageContext } from "../../Utils/LanguageContext";

import styles from "./LanguageSelector.module.css";

export const LanguageSelector = () => {
    let {lang, changeLang} = useContext(LanguageContext)

    function handleChange(event:ChangeEvent){
        let target = event.target
        if(target instanceof HTMLSelectElement){
            changeLang(target.value)
        }
    }
    
    return (
        <div className={styles["language-selector"]}>
            <select name="lang" onChange={handleChange}>
                <option value="pt_br">PT-BR</option>
                <option value="en_us">ENG</option>
            </select>
        </div>
    );
};
