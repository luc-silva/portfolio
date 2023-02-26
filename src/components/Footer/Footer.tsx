import { FileArrowDown } from "phosphor-react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles["portfolio-footer"]}>
            <div>
                <p>Portfolio criado usando ReactJS, HTML/CSS e Typescript.</p>
                <p>
                    Ícones por{" "}
                    <a href="https://phosphoricons.com/" target={"_blank"}>
                        Phosphor-React
                    </a>
                </p>
            </div>
            <div className={styles["icon-container"]}>
                <a
                    href={require("../../assets/lucas-silva-resume.pdf")}
                    download="lucas-silva-cv.pdf"
                >
                    Baixe o Currículo
                    <FileArrowDown size={18} />
                </a>
            </div>
        </footer>
    );
};
