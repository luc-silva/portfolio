import { NavLink } from "react-router-dom";

export const HeaderNavLinks = ({ color }: { color: string }) => {
    return (
        <>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/"
                >
                    Início
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/about-me"
                >
                    Sobre Mim
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) => (isActive ? color : undefined)}
                    to="/projects"
                >
                    Projetos
                </NavLink>
            </li>
        </>
    );
};
