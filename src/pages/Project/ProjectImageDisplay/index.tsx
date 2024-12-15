import { useEffect, useMemo, useState } from "react";
import styles from "./styles.module.css";
import { Circle } from "phosphor-react";

export const ProjectImageDisplay = ({ images }: { images: string[] }) => {
    const loadedImages = useMemo(
        () => images.map((image) => getImage(image)),
        [images]
    );
    const [counter, setCounter] = useState(0);
    const [isMouseHovering, setMouseHovering] = useState(false);

    function getImage(item: string) {
        return `${process.env.PUBLIC_URL}/images/${item}`;
    }
    function handleImageChange(index: number) {
        setCounter(index);
    }

    useEffect(() => {
        let timer: NodeJS.Timer;

        if (isMouseHovering) {
            timer = setInterval(() => {
                setCounter((prev) => (prev + 1) % images.length);
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [images.length, isMouseHovering]);

    const imagePath = useMemo(
        () => loadedImages[counter],
        [counter, loadedImages]
    );

    const handleMouseEnter = () => setMouseHovering(true);
    const handleMouseLeave = () => setMouseHovering(false);

    return (
        <div onMouseOver={handleMouseEnter} onMouseOut={handleMouseLeave}>
            <img src={imagePath} alt="Project" className={styles["image"]} />
            <span className={styles["buttons"]}>
                {loadedImages.map((path, index) => (
                    <Circle
                        size={20}
                        weight={counter === index ? "fill" : "regular"}
                        onClick={() => handleImageChange(index)}
                        className={styles["selector-btn"]}
                        key={index}
                    />
                ))}
            </span>
        </div>
    );
};
