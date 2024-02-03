import { LanguageContext } from "../../context/LanguageProvider";
import { portfolioPages } from "../../constants/portfolioPages";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./HamburguerMenu.module.css";

export const HamburguerMenu = ({
    isActive,
    toggleMenu,
}: {
    isActive: boolean;
    toggleMenu: React.Dispatch<boolean>;
}) => {
    let { lang } = useContext(LanguageContext);
    function closeMenu(e: React.MouseEvent) {
        toggleMenu(false);
    }

    return (
        <div
            className={styles["header-menu__background"]}
            style={{ display: isActive ? "flex" : "none" }}
            onClick={closeMenu}
        >
            <div
                className={styles["header-menu"]}
                style={{ width: isActive ? "85%" : "0%" }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <ul>
                    {portfolioPages.map(({ path, text }) => {
                        return (
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles["nav-active"]
                                            : undefined
                                    }
                                    to={path}
                                    onClick={() => {
                                        toggleMenu(!isActive);
                                    }}
                                >
                                    {text[lang.value]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
    return null;
};
