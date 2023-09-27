import { createContext } from "react";

export const LanguageContext = createContext({
    lang: "pt_br",
    changeLang: (str:string) => {},
});

