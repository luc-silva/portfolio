import { ArrowSquareOut } from "phosphor-react";

export const LinkItem = ({
    link,
    icon_size = 18,
    color,
}: {
    link: string;
    icon_size?: number;
    color?: string;
}) => {
    return (
        <>
            <a href={link} target="_blank" rel="noreferrer">
                <ArrowSquareOut size={icon_size} style={{ color }} />
                Github
            </a>
        </>
    );
};
