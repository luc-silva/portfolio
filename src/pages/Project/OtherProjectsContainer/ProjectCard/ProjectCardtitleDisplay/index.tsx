import { useContext } from "react";
import { PortfolioContext } from "../../../../../context/PortfolioProvider";

export const ProjectCardTitleDisplay = ({
    tags,
    title,
    containsApi,
}: {
    title: string;
    tags: string[];
    containsApi?: boolean;
}) => {
    const { language } = useContext(PortfolioContext);
    return <></>;
};
