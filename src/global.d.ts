declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
}
declare module "*.pdf" {
    const file: string;
    export default file;
}
interface IProjectData {
    title: string;
    introduction: string;
    description: string;
    main_project?: boolean;
    link: string;
    images: string[];
    containsApi?: boolean;
    tags: string[];
}
interface ICertificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    additionalInfo: string;
    courseCompletitionDate: string;
    courseLength: number;
}
interface ITool {
    name: string;
    alt: string;
    toolImage: string;
    additionalInfo: string;
}
