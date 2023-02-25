import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { List, X } from "phosphor-react";

export const Header = ({
    toggleMenu,
    isHeaderMenuActive,
}: {
    toggleMenu: Function;
    isHeaderMenuActive: boolean;
}) => {
    return (
        <header role={"heading"} className={styles["header"]}>
            <div className={styles["header-main"]}>
                {(isHeaderMenuActive && (
                    <X
                        className={styles["mobile-btn"]}
                        size={30}
                        onClick={() => {
                            toggleMenu(!isHeaderMenuActive);
                        }}
                    />
                )) || (
                    <List
                        className={styles["mobile-btn"]}
                        size={30}
                        onClick={() => {
                            toggleMenu(!isHeaderMenuActive);
                        }}
                    />
                )}
                <div className={styles["header-logo"]}>
                    <Link to={"/"}>Portfolio</Link>
                </div>
            </div>
            <nav role={"navigation"} className={styles["header-navigation"]}>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/"
                        >
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/about-me"
                        >
                            Sobre Mim
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles["nav-active"] : undefined
                            }
                            to="/projects"
                        >
                            Projetos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
