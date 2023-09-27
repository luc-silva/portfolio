import { NavLink } from "react-router-dom";
import styles from "./HamburguerMenu.module.css";
import { headerText } from "../../constants/page-texts";
import { useContext } from "react";
import { LanguageContext } from "../../Utils/LanguageContext";

export const HamburguerMenu = ({
    isActive,
    toggleMenu,
}: {
    isActive: boolean;
    toggleMenu: Function;
}) => {
    let {lang} = useContext(LanguageContext)

    if (isActive) {
        return (
            <div className={styles["header-menu"]}>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/"
                            onClick={() => {
                                toggleMenu(!isActive);
                            }}
                        >
                            {headerText["home"][lang]}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/about-me"
                            onClick={() => {
                                toggleMenu(!isActive);
                            }}
                        >
                            {headerText["about"][lang]}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/projects"
                            onClick={() => {
                                toggleMenu(!isActive);
                            }}
                        >
                            {headerText["projects"][lang]}
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    return null;
};
