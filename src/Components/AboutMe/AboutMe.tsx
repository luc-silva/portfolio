import styles from "./AboutMe.module.css";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { AboutMeCertifications } from "./AboutMeCertifications";
import { AboutMeAbout } from "./AboutMeAbout";
import { certificates } from "../../data";

export const AboutMe = () => {
    let [counter, setCounter] = useState(0);
    let [modalFlag, setModalFlag] = useState(false);
    let [modalImage, setModalImage] = useState(
        "../../Images/cert-intermediatewebdev.jpg"
    );

    function goUp() {
        if (counter != certificates.length - 1) {
            setCounter((prevCounter) => prevCounter + 1);
        }
    }
    function goBack() {
        if (counter > 0) {
            setCounter((prevCounter) => prevCounter - 1);
        }
    }
    function handleModal() {
        setModalFlag((previousFlag) => !previousFlag);
    }
    function handleModalImage(image: string) {
        setModalImage(image);
    }

    return (
        <section id="about-me" className={styles["portfolio-aboutme"]}>
            <ImageModal
                certImage={modalImage}
                modalActive={modalFlag}
                handleModal={handleModal}
            />
            <div className={styles["aboutme-main"]}>
                <div className={styles["aboutme-info"]}>
                    <div className={styles["aboutme-title"]}>
                        <h2>Sobre Mim</h2>
                        <p>
                            Sou Lucas, um estudante de Engenharia de Software...
                        </p>
                    </div>
                    <AboutMeAbout />
                </div>
                <div className={styles["about-image-container"]}>
                    <img
                        src={require("../../Images/about-me.jpg")}
                        loading="lazy"
                        alt="Foto de fundo"
                        className={styles["about-image"]}
                    />
                </div>
            </div>
            <AboutMeCertifications
                certificates={certificates}
                counter={counter}
                goBack={goBack}
                goUp={goUp}
                handleModal={handleModal}
                handleModalImage={handleModalImage}
            />
        </section>
    );
};
