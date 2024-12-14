import { useEffect, useState } from "react";
import styles from "./ProjectImageDisplay.module.css";
import { Circle } from "phosphor-react";

export const ProjectImageDisplay = ({ images }: { images: string[] }) => {
    const loadedImages = images.map((image) => getImage(image));
    const [counter, setCounter] = useState(0);
    const [actualImage, setActualImage] = useState(loadedImages[0]);
    const [isMouseHovering, toggleMouseHovering] = useState(false);

    function getImage(item: string) {
        return `${process.env.PUBLIC_URL}/images/${item}`;
    }
    function handleImageChange(index: number) {
        setCounter(index);
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCounter((prev) => {
                const nextCount = prev + 1;
                if (nextCount === images.length) {
                    return 0;
                } else {
                    return nextCount;
                }
            });

            setActualImage(loadedImages[counter]);
        }, 1000);

        if (!isMouseHovering) {
            setCounter(0);
            setActualImage(loadedImages[counter]);
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isMouseHovering, images, counter]);

    return (
        <>
            <span className={styles["buttons"]}>
                {loadedImages.map((path, index) => (
                    <Circle
                        size={20}
                        weight={counter === index ? "fill" : "regular"}
                        onClick={() => handleImageChange(index)}
                        className={styles["selector-btn"]}
                        onMouseOver={() => {
                            toggleMouseHovering(true);
                        }}
                        onMouseOut={() => {
                            toggleMouseHovering(false);
                        }}
                        key={index}
                    />
                ))}
            </span>
            <img
                src={actualImage}
                alt="Project"
                className={styles["image"]}
                onMouseOver={() => {
                    toggleMouseHovering(true);
                }}
                onMouseOut={() => {
                    toggleMouseHovering(false);
                }}
            />
        </>
    );
};
