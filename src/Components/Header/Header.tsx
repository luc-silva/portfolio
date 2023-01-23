import { ArrowSquareOut } from "phosphor-react";
import styles from "./Header.module.css";
import { HeaderExternalBtn } from "./HeaderExternalBtn";
import { HeaderLogo } from "./HeaderLogo";

export const Header = () => {
    return (
        <header className={styles["portfolio-header"]}>
            <HeaderLogo />
            <div className={styles["header-link"]}>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about-me">About Me</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                </ul>
            </div>
            <HeaderExternalBtn />
        </header>
    );
};
