import { useEffect, useState, useContext } from "react";
import { Moon, Sun } from "phosphor-react";

import styles from "./styles.module.css";
import { ThemeContext } from "../../../context/ThemeProvider";

export const ChangeTheme = () => {
    let [isDarkThemeIconActive, toggleIcon] = useState(false);
    let { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme() {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }

    useEffect(() => {
        let body = document.querySelector("body");
        if (body) {
            body.setAttribute("data-theme", theme);
        }
        toggleIcon(!isDarkThemeIconActive);
    }, [theme]);

    return (
        <div className={styles["change-theme"]}>
            {(isDarkThemeIconActive && (
                <Moon
                    size={32}
                    color="var(--title-color)"
                    onClick={() => {
                        toggleTheme();
                    }}
                />
            )) || (
                <Sun
                    size={32}
                    color="var(--title-color)"
                    onClick={() => {
                        toggleTheme();
                    }}
                />
            )}
        </div>
    );
};
