import React, { createContext, useState, Dispatch } from "react";

interface IThemeContext {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

export const ThemeProvider = ({ children }: { children: JSX.Element }) => {
    let [theme, setTheme] = useState("light");

    const themeConfig = {
        theme,
        setTheme,
    };

    return (
        <ThemeContext.Provider value={themeConfig}>
            {children}
        </ThemeContext.Provider>
    );
};
