import styles from "./HeaderNavigation.module.css";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { portfolioPages } from "../../constants/portfolioPages";
import { LanguageContext } from "../../Utils/LanguageContext";

export const HeaderNavigation = () => {
    let color = styles["nav-active"];
    let { lang } = useContext(LanguageContext);

    return (
        <nav role={"navigation"} className={styles["header-navigation"]}>
            <ul>
                {portfolioPages.map(({ text, path }, index) => (
                    <li key={index}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? color : undefined
                            }
                            to={path}
                        >
                            {text[lang]}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
