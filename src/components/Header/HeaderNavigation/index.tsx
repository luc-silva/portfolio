import { portfolioPages } from "../../../constants/portfolioPages";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const HeaderNavigation = () => {
    const color = styles["nav-active"];
    const { language } = useContext(PortfolioContext);

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
                            {text[language]}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
