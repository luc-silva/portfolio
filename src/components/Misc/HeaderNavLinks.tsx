import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../Utils/LanguageContext";
import { useContext } from "react";
import { headerText } from "../../constants/page-texts";

export const HeaderNavLinks = ({ color }: { color: string }) => {
    let {lang} = useContext(LanguageContext)

    return (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/"
                >
                    {headerText["home"][lang]}
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/about-me"
                >
                    {headerText["about"][lang]}
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/projects"
                >
                    {headerText["projects"][lang]}
                </NavLink>
            </li>
        </>
    );
};
