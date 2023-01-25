import { ArrowRight, FileArrowDown } from "phosphor-react";
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

export const Home = () => {
    let imagesArray = [
        "home-image-1.jpg",
        "home-image-2.jpg",
        "home-image-3.jpg",
        "home-image-4.jpg",
        "home-image-5.jpg",
    ];
    let [actualImg, setActualImg] = useState(getImage(imagesArray[0]));
    let counter = 0;

    useEffect(() => {
        let imageChangingInterval = setInterval(() => {
            counter++;
            if (counter == imagesArray.length) {
                counter = 0;
            }
            setActualImg(getImage(imagesArray[counter]));
        }, 5000);
        return () => clearInterval(imageChangingInterval);
    }, []);

    function getImage(image: string) {
        return require(`../../Images/${image}`);
    }

    return (
        <section id="home" className={styles["portfolio-home"]}>
            <img
                loading="lazy"
                className={styles["background-image"]}
                src={actualImg}
                alt="Portofolio home image"
            />
            <div className={styles["home-greetings"]}>
                <div className={styles["greetings-title"]}>
                    <strong>Olá, como vai?</strong>
                    <h2>Me chamo Lucas Santos</h2>
                    <p>Estudante de Engenharia de Software</p>
                </div>

                <div className={styles["greetings-buttons"]}>
                    <a className={styles["project-button"]} href="/projects">
                        Veja meus projetos
                        <ArrowRight size={18} />
                    </a>
                    <a
                        className={styles["curriculum-button"]}
                        href=""
                        download="Curriculum Vitae.pdf"
                    >
                        Baixe o currículo
                        <FileArrowDown size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};
