import { Moon, Sun } from "phosphor-react";
import { useEffect, useState } from "react";

import styles from "./ChangeTheme.module.css";

export const ChangeTheme = () => {
    let [theme, setTheme] = useState("light");
    let [isDarkThemeIconActive, toggleIcon] = useState(false);

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
