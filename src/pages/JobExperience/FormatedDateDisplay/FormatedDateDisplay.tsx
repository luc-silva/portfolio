import ptBR from "date-fns/locale/pt-BR";
import enUS from "date-fns/locale/en-US";
import { useContext } from "react";
import { format } from "date-fns";

import styles from "./FormatedDateDisplay.module.css";
import { LanguageContext } from "../../../context/LanguageProvider";

export const FormatedDateDisplay = ({
    period,
}: {
    period: { start: Date; end?: Date };
}) => {
    const { lang } = useContext(LanguageContext);

    return (
        <p className={styles["date"]}>
            {format(period.start, "MMMM y", {
                locale: lang.value === "pt_br" ? ptBR : enUS,
            })}
        </p>
    );
};
