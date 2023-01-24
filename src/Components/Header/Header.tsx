import { NavLink } from "react-router-dom";
import { HeaderExternalBtn } from "./HeaderExternalBtn";
import { HeaderLogo } from "./HeaderLogo";

import styles from "./Header.module.css";

export const Header = () => {
    return (
        <header className={styles["portfolio-header"]}>
            <HeaderLogo />
            <div className={styles["header-link"]}>
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
            </div>
            <HeaderExternalBtn />
        </header>
    );
};
