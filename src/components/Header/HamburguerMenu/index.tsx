import { portfolioPages } from "../../../constants/portfolioPages";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const HamburguerMenu = () => {
    const { language } = useContext(PortfolioContext);
    const { handleMenuModal, isHeaderMenuActive } =
        useContext(PortfolioContext);

    if (!isHeaderMenuActive) return null;

    return (
        <div
            className={styles["header-menu__background"]}
            style={{ display: isHeaderMenuActive ? "flex" : "none" }}
            onClick={handleMenuModal}
        >
            <div
                className={styles["header-menu"]}
                style={{ width: isHeaderMenuActive ? "85%" : "0%" }}
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
                                    onClick={handleMenuModal}
                                >
                                    {text[language]}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};
