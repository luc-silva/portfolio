import styles from "./EducationItem.module.css"

export const EducationItem = () => {
    return (
        <div className={styles["container-item"]}>
            <div className={styles["item-title"]}>
                <div>
                    <strong>Engenharia de Software</strong>{" "}
                    <em>UNESA, Estacio de sa</em>
                </div>
                <p>Atualmente cursando o terceiro semestre</p>
            </div>
            <div className={styles["item-info"]}>
                <div>
                    <span>Inicio:</span> 15 de Fevereiro, 2022
                </div>
                <div>
                    <span>Término:</span> Dezembro, 2025
                </div>
            </div>
        </div>
    );
};
