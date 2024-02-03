import { Children, createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../features/languageSlice";
import { languageOptions } from "../constants/languagesOptions";

export const LanguageContext = createContext({
    lang: {...languageOptions[0]},
    changeLang: (value: LanguageOptionObject) => {},
});

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
    let dispatch = useDispatch();
    let [currentLangOption, setCurrentLangOption] = useState(
        {...languageOptions[0]}
    );

    let lang = useSelector(
        (state: { language: LanguageOptionObject }) => state.language
    );

    const langDummy = {
        lang,
        changeLang: setCurrentLangOption,
    };

    useEffect(() => {
        console.log(currentLangOption)
        dispatch(setLanguage(currentLangOption));
    }, [currentLangOption]);

    return (
        <LanguageContext.Provider value={langDummy}>
            {children}
        </LanguageContext.Provider>
    );
};
