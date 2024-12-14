import { HeaderNavigation } from "../Misc/HeaderNavigation";
import { LanguageSelector } from "../Misc/LanguageSelector";
import { ChangeTheme } from "./ChangeTheme";
import { List, X } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import { PortfolioContext } from "../../context/PortfolioProvider";

export const Header = () => {
    const { isHeaderMenuActive, handleImageModal } =
        useContext(PortfolioContext);

    return (
        <header className={styles["header"]}>
            <div className={styles["header-main"]}>
                {(isHeaderMenuActive && (
                    <X
                        className={styles["mobile-btn"]}
                        color="var(--text-color)"
                        size={30}
                        onClick={handleImageModal}
                    />
                )) || (
                    <List
                        className={styles["mobile-btn"]}
                        color="var(--text-color)"
                        size={35}
                        onClick={handleImageModal}
                    />
                )}
                <div className={styles["header-logo"]}>
                    <Link to={"/"}>Portfolio</Link>
                </div>
            </div>

            <div className={styles["navigation-container"]}>
                <HeaderNavigation />
            </div>
            <div className={styles["header__misc"]}>
                <div className={styles["change-theme__button"]}>
                    <ChangeTheme />
                </div>
                <div className={styles["language-selector"]}>
                    <LanguageSelector />
                </div>
            </div>
        </header>
    );
};
