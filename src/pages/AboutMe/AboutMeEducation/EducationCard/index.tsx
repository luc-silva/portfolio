import { ThemeContext } from "../../../../context/ThemeProvider";
import { useContext } from "react";
import { Info } from "./Info";
import styles from "./styles.module.css";

interface IProps {
    data: EducationDetail;
}
export const EducationCard = ({ data }: IProps) => {
    const { theme } = useContext(ThemeContext);

    const changeLogoBasedOnTheme = ({
        logo_changable,
        logo_path,
    }: Pick<EducationDetail, "logo_changable" | "logo_path">) => {
        return `${process.env.PUBLIC_URL}/images/${
            logo_changable ? logo_path[theme] : logo_path.default
        }`;
    };

    return (
        <div className={styles["education-card"]}>
            <div className={styles["logo"]}>
                <img src={changeLogoBasedOnTheme(data)} />
            </div>
            <div className={styles["education__info"]}>
                <Info data={data} />
            </div>
        </div>
    );
};
