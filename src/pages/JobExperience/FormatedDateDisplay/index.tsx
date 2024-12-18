import ptBR from "date-fns/locale/pt-BR";
import enUS from "date-fns/locale/en-US";
import { useContext } from "react";
import { format } from "date-fns";

import styles from "./styles.module.css";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const FormatedDateDisplay = ({
    period,
}: {
    period: { start: Date; end?: Date };
}) => {
    const { language } = useContext(PortfolioContext);

    return (
        <p className={styles["date"]}>
            {format(period.start, "MMMM y", {
                locale: language === "pt_br" ? ptBR : enUS,
            })}
        </p>
    );
};
