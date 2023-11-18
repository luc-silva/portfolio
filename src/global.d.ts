declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.pdf" {
    const file: string;
    export default file;
}

type LangObject = { [key: string]: { [key: string]: string } };
interface LanguageOptionObject {
    value: string;
    text: string;
    icon: JSX.Element;
}
interface IProjectData {
    title: string;
    introduction: Languages;
    description: Languages;
    main_project?: boolean;
    link: string;
    images: string[];
    containsApi?: boolean;
    tags: string[];
}
interface ICertificate {
    tags: string[];
    certImage: string;
    name: Languages;
    company: string;
    company_site: string;
    info_active: boolean;
    additional_info: Languages;
    completition_date: string;
    length: number;
}

interface JobExperience {
    role: string;
    company: {
        name: string;
        description: Languages;
    };
    location: {
        state: string;
        country: string;
    };
    period: {
        start: string;
        end: string;
    };
    description: {
        text: Languages;
        featured: string[];
    };
    quantifiable_results: Languages;
    tools: string[];
}

interface Participations {
    type: ParticipationsTypes;
    position?: string;
    participants: string;
    period: {
        start: string;
        end: string;
    };
    location: {
        state: string;
        country: string;
    };
    organization: {
        name: string;
        description: Languages;
    };
    description: Languages;
}

type ParticipationsTypes = "CTF" | "Hackton" | "Lecture" | "Event" | "Award";

interface ITool {
    name: string;
    alt: string;
    toolImage: string;
    info_active: boolean;
    additional_info: Languages;
}

interface Languages {
    [key: string]: string;
}
{
    pt_br: string;
    en_US: string;
}
