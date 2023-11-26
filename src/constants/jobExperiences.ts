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
                pt_br: `Até o momento, fui responsável por realizar alterações e manuteção em um sistema que é usado por toda a empresa`,
                en_us: "Until now I have been responsible to make changes and maintein a system that's used by the whole company.",
            },
        },
        location: {
            country: {
                pt_br: "Brasil",
                en_us: "Brasil",
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
        tools: ["Typescript", "React", "SASS"],
        active: true,
    },
];
