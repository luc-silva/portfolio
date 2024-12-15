import { useContext, useMemo } from "react";
import { PortfolioContext } from "../../../../context/PortfolioProvider";

interface IProps {
    details: ITool;
}
export const SkillDetails = ({
    details: { additional_info, alt, info_active, name, toolImage },
}: IProps) => {
    const { language, importImageFromPath } = useContext(PortfolioContext);

    return (
        <li>
            <img
                loading="lazy"
                src={importImageFromPath(toolImage)}
                alt={alt}
            />
            <p>{name}</p>
            {info_active && <em>{additional_info[language]}</em>}
        </li>
    );
};
