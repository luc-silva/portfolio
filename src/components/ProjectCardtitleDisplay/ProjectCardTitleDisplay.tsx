import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageProvider";

export const ProjectCardTitleDisplay = ({
    tags,
    title,
    containsApi,
}: {
    title: string;
    tags: string[];
    containsApi?: boolean;
}) => {
    let { lang } = useContext(LanguageContext);
    return <></>;
};
