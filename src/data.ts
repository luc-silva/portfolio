export interface IProject {
    projectTitle: string;
    projectLink: string;
    projectImages: string[];
    projectTags: string[];
}

export const projects: IProject[] = [
    {
        projectTitle: "Electroware",
        projectLink: "https://github.com/luc-silva/electroware",
        projectImages: [
            "project-electroware-1.png",
            "project-electroware-2.png",
            "project-electroware-3.png",
            "project-electroware-4.png",
            "project-electroware-5.png",
        ],
        projectTags: ["TS", "ReactJS", "MongoDB", "Express", "HTML", "CSS"],
    },
    {
        projectTitle: "Weather App",
        projectLink: "https://github.com/luc-silva/weather-app",
        projectImages: [
            "project-weatherapp-1.png",
            "project-weatherapp-2.png",
            "project-weatherapp-3.png",
            "project-weatherapp-4.png",
        ],
        projectTags: ["TS", "ReactJS", "HTML", "CSS"],
    },
    {
        projectTitle: "Todo Manager",
        projectLink: "https://github.com/luc-silva/to-do",
        projectImages: [
            "project-todo-1.png",
            "project-todo-2.png",
            "project-todo-3.png",
            "project-todo-4.png",
        ],
        projectTags: ["TS", "ReactJS", "HTML", "CSS"],
    },
    {
        projectTitle: "Restaurant Page",
        projectLink: "https://github.com/luc-silva/restaurant-page",
        projectImages: [
            "project-restaurant-1.png",
            "project-restaurant-2.png",
            "project-restaurant-3.png",
            "project-restaurant-4.png",
            "project-restaurant-5.png",
        ],
        projectTags: ["JS", "ReactJS", "HTML", "CSS"],
    },
    {
        projectTitle: "Portfolio",
        projectLink: "https://github.com/luc-silva/portfolio",
        projectImages: [
            "project-portfolio-1.png",
            "project-portfolio-2.png",
            "project-portfolio-3.png",
            "project-portfolio-4.png",
            "project-portfolio-5.png",
        ],
        projectTags: ["TS", "ReactJS", "HTML", "CSS"],
    },
    {
        projectTitle: "Etch-A-Sketch",
        projectLink: "https://github.com/luc-silva/Etch-A-Sketch",
        projectImages: [
            "project-etchasketch-1.png",
            "project-etchasketch-2.png",
        ],
        projectTags: ["JS", "HTML", "CSS"],
    },
    {
        projectTitle: "Calculator",
        projectLink: "https://github.com/luc-silva/calculator",
        projectImages: ["project-calculator-1.png"],
        projectTags: ["JS", "HTML", "CSS"],
    },
];

export interface ICertificate {
    tags: string[];
    certImage: string;
    courseName: string;
    schoolName: string;
    schoolSite: string;
    additionalInfo: string;
    courseCompletitionDate: string;
    courseLength: number;
}

export const certificates: ICertificate[] = [
    {
        tags: [
            "Javascript",
            "Typescript",
            "HTML & CSS",
            "ReactJS",
            "Node",
            "Git",
            "SQL",
        ],
        certImage: "cert-spreadfullstack.jpg",
        courseName: "Spread Fullstack Developer Bootcamp",
        schoolName: "Digital Innovation One",
        schoolSite: "https://www.dio.me/en",
        additionalInfo: "",
        courseCompletitionDate: "09/06/2022",
        courseLength: 98,
    },
    {
        tags: ["MongoDB", "NoSQL", "NodeJS"],
        certImage: "cert-mongodbnodejspath.png",
        courseName: "MongoDB Node.js Developer Path",
        schoolName: "MongoDB University",
        schoolSite: "https://learn.mongodb.com/",
        additionalInfo: "",
        courseCompletitionDate: "02/17/2022",
        courseLength: 12,
    },
    {
        tags: ["ReactJS", "Dot Net", "SQL"],
        certImage: "cert-intermediatewebdev.jpg",
        courseName: "Desenvolvimento de Sistemas Web Intermediário",
        schoolName: "Recode",
        schoolSite: "https://recode.org.br/",
        additionalInfo:
            "Data de conclusão do curso e emissão do certificado não se condizem**",
        courseCompletitionDate: "31/05/2022",
        courseLength: 40,
    },
    {
        tags: ["Javascript", "HTML & CSS", "Bootstrap", "SQL", "SCRUM"],
        certImage: "cert-basicwebdev.jpg",
        courseName: "Desenvolvimento de Sistemas Web Básico",
        schoolName: "Recode",
        schoolSite: "https://recode.org.br/",
        additionalInfo:
            "Data de conclusão do curso e emissão do certificado não se condizem**",
        courseCompletitionDate: "20/04/2022",
        courseLength: 40,
    },
];

export interface IKnowTool {
    name: string;
    alt: string;
    toolImage: string;
    additionalInfo: string;
}
export const knowTools: IKnowTool[] = [
    {
        name: "Javascript",
        alt: "Javascript logo",
        toolImage: "logo-javascript.png",
        additionalInfo: "",
    },
    {
        name: "Typescript",
        alt: "Typescript logo",
        toolImage: "logo-typescript.png",
        additionalInfo: "",
    },
    {
        name: "ReactJS",
        alt: "ReactJS logo",
        toolImage: "logo-reactjs.png",
        additionalInfo: "",
    },
    {
        name: "NodeJS",
        alt: "NodeJS logo",
        toolImage: "logo-nodejs.png",
        additionalInfo: "",
    },
    {
        name: "Ubuntu",
        alt: "Ubuntu logo",
        toolImage: "logo-ubuntu.png",
        additionalInfo: "",
    },
    {
        name: "MongoDB",
        alt: "MongoDB logo",
        toolImage: "logo-mongo.png",
        additionalInfo: "",
    },
    {
        name: "HTML",
        alt: "HTML logo",
        toolImage: "logo-html.png",
        additionalInfo: "",
    },
    {
        name: "CSS",
        alt: "CSS logo",
        toolImage: "logo-css.png",
        additionalInfo: "",
    },
    {
        name: "SQL",
        alt: "SQL logo",
        toolImage: "logo-sql.png",
        additionalInfo: "Experiência acadêmica.",
    },
    {
        name: "Shell Scripting",
        alt: "Shell logo",
        toolImage: "logo-shell.png",
        additionalInfo: "Experiência acadêmica.",
    },
    {
        name: "Python",
        alt: "Python logo",
        toolImage: "logo-python.png",
        additionalInfo: "Experiência acadêmica.",
    },
];
