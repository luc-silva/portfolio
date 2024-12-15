export const jobExperiences: JobExperience[] = [
    {
        company: {
            description: {
                pt_br: "T",
                en_us: "T ",
            },
            name: "Tok&Stok",
        },
        description: {
            text: {
                pt_br: `Comecei o estágio atuando primariamente em fazer alterações visuais no sistema de gestão usado pelos analistas da empresa. 
                Com o tempo, fui atuando em tarefas cada vez mais complexas, desde a criação de novas telas, melhoria ou reparo de processos até alteração de regras de negócio e procedures no Oracle. `,
                en_us: `I began my internship primarily working on making visual changes to the management system used by the company's analysts.
                Over time, I began working on increasingly complex tasks, from creating new screens, improving or repairing processes, to changing business rules and procedures in Oracle.`,
            },
        },
        location: {
            country: {
                pt_br: "Brasil",
                en_us: "Brazil",
            },
            state: {
                pt_br: "São Paulo",
                en_us: "São Paulo",
            },
        },
        period: {
            start: new Date("11/1/2023"),
        },
        quantifiable_results: {
            pt_br: [],
            en_us: [],
        },
        role: {
            pt_br: "Desenvolvedor Fullstack Estagiário",
            en_us: "Intern Fullstack Developer",
        },
        tools: ["Typescript", "React", "Node", "NestJS", "OracleDB", "SASS"],
        active: true,
    },
];
