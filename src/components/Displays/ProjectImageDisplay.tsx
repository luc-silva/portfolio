import { useEffect, useState } from "react";
import styles from "./ProjectImageDisplay.module.css";

export const ProjectImageDisplay = ({ images }: { images: string[] }) => {
    let [counter, setCounter] = useState(0);
    let [actualImage, setActualImage] = useState(getImage(images[0]));
    let [isMouseHovering, toggleMouseHovering] = useState(false);
    function getImage(item: string) {
        return require(`../../assets/images/` + item);
    }
    useEffect(() => {
        let timer = setInterval(() => {
            setCounter((prev) => {
                let nextCount = prev + 1;
                if (nextCount === images.length) {
                    return 0;
                } else {
                    return nextCount;
                }
            });

            setActualImage(getImage(images[counter]));
        }, 1000);

        if (!isMouseHovering) {
            setCounter(0);
            setActualImage(getImage(images[counter]));
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isMouseHovering, images, counter]);

    return (
        <img
            src={actualImage}
            loading="lazy"
            alt="Project"
            className={styles["image"]}
            onMouseOver={() => {
                toggleMouseHovering(true);
            }}
            onMouseOut={() => {
                toggleMouseHovering(false);
            }}
        />
    );
};
