import { Envelope, GithubLogo, LinkedinLogo } from "phosphor-react";

export const HomeLinks = () => {
    return (
        <>
            <li>
                <a
                    href="https://www.linkedin.com/in/silva-luc/"
                    rel="noreferrer"
                    target={"_blank"}
                >
                    <LinkedinLogo size={30} color="var(--main-color)" />
                </a>
            </li>
            <li>
                <a
                    href="https://github.com/luc-silva"
                    rel="noreferrer"
                    target={"_blank"}
                >
                    <GithubLogo size={30} color="var(--main-color)" />
                </a>
            </li>
            <li>
                <a href="mailto:lucas.silva1203@outlook.com" rel="noreferrer">
                    <Envelope size={30} color="var(--main-color)" />
                </a>
            </li>
        </>
    );
};
