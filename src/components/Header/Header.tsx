import { Link } from "react-router-dom";
import { List, X } from "phosphor-react";

import { ChangeTheme } from "./ChangeTheme"; 
import { LanguageSelector } from "../Misc/LanguageSelector";
import styles from "./Header.module.css";
import { HeaderNavigation } from "../Misc/HeaderNavigation";

export const Header = ({
    toggleMenu,
    isHeaderMenuActive,
}: {
    toggleMenu: Function;
    isHeaderMenuActive: boolean;
}) => {

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
