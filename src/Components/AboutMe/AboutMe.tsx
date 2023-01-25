import styles from "./AboutMe.module.css";
import { FileArrowDown } from "phosphor-react";
import { useState } from "react";
import { ImageModal } from "./ImageModal";
import { AboutMeCertifications } from "./AboutMeCertifications";
import { AboutMeAbout } from "./AboutMeAbout";

interface certificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    additionalInfo: string;
    courseCompletitionDate: string;
    courseLength: number;
}

export const AboutMe = () => {
    let certificates: certificate[] = [
        {
            tags: [
                "Javascript",
                "Typescript",
                "HTML & CSS",
                "ReactJS",
                "Node",
                "Git",
                "SQL",
            ],
            certImage: "cert-spreadfullstack.jpg",
            courseName: "Spread Fullstack Developer Bootcamp",
            schoolName: "Digital Innovation One",
            schoolSite: "https://www.dio.me/en",
            additionalInfo: "",
            courseCompletitionDate: "09/06/2022",
            courseLength: 98,
        },
        {
            tags: ["ReactJS", "Dot Net", "SQL"],
            certImage: "cert-intermediatewebdev.jpg",
            courseName: "Desenvolvimento de Sistemas Web Intermediário",
            schoolName: "Recode",
            schoolSite: "https://recode.org.br/",
            additionalInfo:
                "Data de conclusão do curso e emissão do certificado não se condizem**",
            courseCompletitionDate: "31/05/2022",
            courseLength: 40,
        },
        {
            tags: ["Javascript", "HTML & CSS", "Bootstrap", "SQL", "SCRUM"],
            certImage: "cert-basicwebdev.jpg",
            courseName: "Desenvolvimento de Sistemas Web Básico",
            schoolName: "Recode",
            schoolSite: "https://recode.org.br/",
            additionalInfo:
                "Data de conclusão do curso e emissão do certificado não se condizem**",
            courseCompletitionDate: "20/04/2022",
            courseLength: 40,
        },
    ];

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
