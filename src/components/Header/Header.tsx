import { HeaderNavigation } from "../Misc/HeaderNavigation";
import { LanguageSelector } from "../Misc/LanguageSelector";
import { ChangeTheme } from "./ChangeTheme";
import { List, X } from "phosphor-react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";

export const Header = ({
    toggleMenu,
    isHeaderMenuActive,
}: {
    toggleMenu: React.Dispatch<boolean>;
    isHeaderMenuActive: boolean;
}) => {
    return (
        <header className={styles["header"]}>
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
