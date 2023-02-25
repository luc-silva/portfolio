import { ArrowRight, FileArrowDown } from "phosphor-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

export const Home = () => {
    let imagesArray = [
        "home-image-1.jpg",
        "home-image-2.jpg",
        "home-image-3.jpg",
        "home-image-4.jpg",
        "home-image-5.jpg",
    ];
    // let [actualImg, setActualImg] = useState(getImage(imagesArray[0]));
    // let counter = 0;

    // useEffect(() => {
    //     let imageChangingInterval = setInterval(() => {
    //         counter++;
    //         if (counter === imagesArray.length) {
    //             counter = 0;
    //         }
    //         setActualImg(getImage(imagesArray[counter]));
    //     }, 5000);
    //     return () => clearInterval(imageChangingInterval);
    // }, []);

    // function getImage(image: string) {
    //     return require(`../../Images/${image}`);
    // }

    return (
        <main role={"main"} className={styles["home"]}>
            <section className={styles["greetings"]}>
                <div className={styles["greetings-main"]}>
                    <strong>Olá, como vai?</strong>
                    <div className={styles["greetings-title"]}>
                        <h2>Me chamo Lucas Santos</h2>
                        <p>Desenvolvedor Web</p>
                    </div>
                </div>
                <div className={styles["buttons"]}>
                    <Link className={styles["project-button"]  } to="/projects">
                        Veja meus projetos
                        <ArrowRight size={18} />
                    </Link>
                    <a
                        className={styles["curriculum-button"]}
                        href={require("../assets/lucas-silva-resume.pdf")}
                        download="lucas-silva-cv.pdf"
                    >
                        Baixe o currículo
                        <FileArrowDown size={18} weight="bold"/>
                    </a>
                </div>
            </section>
        </main>
    );
};
