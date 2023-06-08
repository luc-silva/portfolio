import { NavLink } from "react-router-dom";
import styles from "./HamburguerMenu.module.css";

export const HamburguerMenu = ({
    isActive,
    toggleMenu,
}: {
    isActive: boolean;
    toggleMenu: Function;
}) => {
    if (isActive) {
        return (
            <div className={styles["header-menu"]}>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles["nav-active"]
                                    : undefined
                            }
                            to="/"
                            onClick={() => {
                                toggleMenu(!isActive)
                            }}
                        >
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles["nav-active"]
                                    : undefined
                            }
                            to="/about-me"
                            onClick={() => {
                                toggleMenu(!isActive)
                            }}
                        >
                            Sobre Mim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? styles["nav-active"]
                                    : undefined
                            }
                            to="/projects"
                            onClick={() => {
                                toggleMenu(!isActive)
                            }}
                        >
                            Projetos
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
    return null;
};