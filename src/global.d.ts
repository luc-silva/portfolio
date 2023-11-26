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
interface MultiLangData {[key: string]: string };
interface MultiLandArrayData {[key: string]: string[] }

interface JobExperience {
    role: MultiLangData;
    company: {
        name: string;
        description: MultiLangData;
    };
    location: {
        state: MultiLangData;
        country: MultiLangData;
    };
    period: {
        start: Date
        end?: Date
    };
    description: {
        text: MultiLangData;
        featured?: MultiLangData[];
    };
    quantifiable_results: MultiLandArrayData;
    tools: string[];
    active: boolean
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

interface GithubUser {
    login: string;
    id: number;
    avatar_url: string;
}

interface GithubRepository {
    id: string;
    name: string;
    full_name: string;
    private: false;
    owner: GithubUser;
    description: string;
    homepage: string;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: string;
    allow_forking: boolean;
    is_template: boolean;
    topics: string[];
    forks: number;
    open_issues: number;
    watchers: number;
}
