import { HeaderNavLinks } from "./HeaderNavLinks";
import styles from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
    let color = styles["nav-active"];

    return (
        <nav role={"navigation"} className={styles["header-navigation"]}>
            <ul>
                <HeaderNavLinks color={color} />
            </ul>
        </nav>
    );
};
