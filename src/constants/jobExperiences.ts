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
                pt_br: `Minha principal função é dar manutenção e fazer algumas melhorias a sistemas já existentes dentro da empresa.`,
                en_us: "My main role is to maintain and make some improvements to existing systems within the company.",
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
