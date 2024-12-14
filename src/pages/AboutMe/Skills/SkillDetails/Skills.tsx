import { useContext, useMemo } from "react";
import { LanguageContext } from "../../../../context/LanguageProvider";

interface IProps {
    details: ITool;
}
export const SkillDetails = ({
    details: { additional_info, alt, info_active, name, toolImage },
}: IProps) => {
    const { lang } = useContext(LanguageContext);

    const image = useMemo(() => {
        return `${process.env.PUBLIC_URL}/images/${toolImage}`;
    }, [toolImage]);

    return (
        <li>
            <img loading="lazy" src={image} alt={alt} />
            <p>{name}</p>
            {info_active && <em>{additional_info[lang.value]}</em>}
        </li>
    );
};
