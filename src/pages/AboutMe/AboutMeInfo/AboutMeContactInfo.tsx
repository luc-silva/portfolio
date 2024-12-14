import { Envelope, LinkedinLogo } from "phosphor-react";

export const AboutMeContactInfo = () => {
    return (
        <>
            <div>
                <LinkedinLogo size={20} color={"var(--main-color)"} />
                Linkedin: luc-silva
            </div>
            <div>
                <Envelope size={20} color={"var(--main-color)"} />
                Email: lucas.silva1203@outlook.com
            </div>
        </>
    );
};
