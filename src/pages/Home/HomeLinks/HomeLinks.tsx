import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";
import styles from "./styles.module.css";

interface IProps {
    src: string;
    logo: JSX.Element;
    target?: "blank";
}
export const Link = ({ logo, src, target }: IProps) => {
    return (
        <li>
            <a href={src} rel="noreferrer" target={target || ""}>
                {logo}
            </a>
        </li>
    );
};

export const HomeLinks = () => {
    return (
        <ul className={styles.homeLinks}>
            <Link
                logo={<LinkedinLogo size={30} color="var(--main-color)" />}
                src="https://www.linkedin.com/in/silva-luc/"
                target="blank"
            />
            <Link
                logo={<GithubLogo size={30} color="var(--main-color)" />}
                src="https://github.com/luc-silva"
                target="blank"
            />
            <Link
                logo={<Envelope size={30} color="var(--main-color)" />}
                src="mailto:lucas.silva1203@outlook.com"
            />
        </ul>
    );
};
