import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { List, X } from "phosphor-react";
import { ChangeTheme } from "./ChangeTheme";

export const Header = ({
    toggleMenu,
    isHeaderMenuActive,
}: {
    toggleMenu: Function;
    isHeaderMenuActive: boolean;
}) => {
    let color = styles["nav-active"];
    return (
        <header aria-level={1} role={"heading"} className={styles["header"]}>
            <div className={styles["header-main"]}>
                {(isHeaderMenuActive && (
                    <X
                        className={styles["mobile-btn"]}
                        color="var(--text-color)"
                        size={30}
                        onClick={() => {
                            toggleMenu(!isHeaderMenuActive);
                        }}
                    />
                )) || (
                    <List
                        className={styles["mobile-btn"]}
                        color="var(--text-color)"
                        size={35}
                        onClick={() => {
                            toggleMenu(!isHeaderMenuActive);
                        }}
                    />
                )}
                <div className={styles["header-logo"]}>
                    <Link to={"/"}>Portfolio</Link>
                </div>
            </div>

            <div className={styles["navigation-container"]}>
                <nav
                    role={"navigation"}
                    className={styles["header-navigation"]}
                >
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? color : undefined
                                }
                                to="/"
                            >
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? color : undefined
                                }
                                to="/about-me"
                            >
                                Sobre Mim
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? color : undefined
                                }
                                to="/projects"
                            >
                                Projetos
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <ChangeTheme />
            </div>
        </header>
    );
};
