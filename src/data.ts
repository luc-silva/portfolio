export const projects: IProjectData[] = [
    {
        title: "Electroware",
        link: "https://github.com/luc-silva/electroware",
        introduction: {
            pt_br: "Electroware é um projeto (CRUD) criado com Typescript, React, Express e MongoDB baseado em um marketplace.",
            en_us: "Electroware CRUD project created with Typescript, React, Express and MongoDB, inspirated by online marketplaces.",
        },
        description: {
            pt_br: `O projeto possui sistema de contas, carrinhos de compras, lista de desejos, coleções de itens da lista de desejos, criação, compra, edição e busca de produtos. Também é possível avaliar e visualizar o perfil de outros usuários.\nRotas privadas são protegidas por JWT, enquanto as senhas são criptografadas com o bcrypt.`,
            en_us: `The project contains a account system, shopping cart, wishlist, wishlist item collection and many operations with products, such as listing, buy, edit info and searching. Its also possible to create a review and check othr users profiles.\nPrivated routes are protected by JWT Tokens, while the passwords are cryptografed with BCrypt.`,
        },
        main_project: true,
        containsApi: true,
        images: [
            "project-electroware-1.png",
            "project-electroware-2.png",
            "project-electroware-3.png",
            "project-electroware-4.png",
            "project-electroware-5.png",
        ],
        tags: ["TS", "ReactJS", "MongoDB", "Express"],
    },
    {
        title: "Bookwise",
        link: "https://github.com/luc-silva/bookwise",
        introduction: {
            pt_br: "Bookwise é uma aplicação de gerenciamentos de livros.",
            en_us: "Bookwise is a book mananger applications",
        },
        description: {
            pt_br: `O projeto permite que o usuário possa adicionar livros que leu, ainda vai ler ou deixou de ler em uma conta pessoal. Também permite o upload de imagens e o display de covers dos livros em sua estante, na página inicial.`,
            en_us: `The project allows the user to add books that read or its yet to read in its personal account.
            Also allows cover image upload and display.`,
        },
        main_project: true,
        containsApi: true,
        images: [
            "project-bookwise-1.png",
            "project-bookwise-2.png",
            "project-bookwise-3.png",
            "project-bookwise-4.png",
        ],
        tags: ["TS", "ReactJS", "MongoDB", "Express"],
    },

    {
        title: "Taskbuddy",
        introduction: {
            en_us: "Task manager application.",
            pt_br: "Aplicação de gerenciamento de tarefas.",
        },
        description: {
            pt_br: "Desenvolvido inicialmente com JavaScript, o projeto permite que um usuário defina tarefas para sem feitas, podendo especificar datas e prioridades ou até mesmo planejar algum grande feito, também podendo inserir sub-tarefas. \nTambém contém uma dashboard com histórico de tarefas e algumas estatísticas.",
            en_us: "",
        },
        main_project: true,
        containsApi: true,
        link: "https://github.com/luc-silva/to-do",
        images: [
            "project-taskbuddy-1.png",
            "project-taskbuddy-2.png",
            "project-taskbuddy-3.png",
            "project-taskbuddy-4.png",
            "project-taskbuddy-5.png",
            "project-taskbuddy-6.png",
            "project-taskbuddy-7.png",
        ],
        tags: ["TS", "ReactJS", "Java", "Spring"],
    },
    {
        title: "WeatherScope",
        link: "https://github.com/luc-silva/weather-app",
        introduction: {
            pt_br: "Aplicação que exibe a temperaturas de diversas cidades. Configurações são salvas em LocalStorage.",
            en_us: "Aplication that displays weather status from multiple cities. Configs are saved in localStorage.",
        },
        description: {
            pt_br: `Desenvolvida inicialmente com Javascript, hoje remasterizada com ReactJs e Typescript.\n O usuário pode alterar a temperatura da cidade que aparece no display principal bem as demais além de realizar pesquisa à uma cidade em específico.\n O projeto também possui também, além das abas de climas e configurações, a aba de notícias (que mostra 5 notícias fictícias criadas pelo ChatGPT) e a agenda, aba em que o usuário pode criar e salvar tarefas a serem feitas.`,
            en_us: "",
        },
        main_project: true,
        images: [
            "project-weatherapp-1.png",
            "project-weatherapp-2.png",
            "project-weatherapp-3.png",
            "project-weatherapp-4.png",
            "project-weatherapp-5.png",
        ],
        tags: ["TS", "ReactJS"],
    },
    {
        title: "Restaurant Page",
        link: "https://github.com/luc-silva/restaurant-page",
        introduction: { pt_br: "", en_us: "" },
        description: { pt_br: "", en_us: "" },
        images: [
            "project-restaurant-1.png",
            "project-restaurant-2.png",
            "project-restaurant-3.png",
            "project-restaurant-4.png",
            "project-restaurant-5.png",
        ],
        tags: ["JS", "ReactJS"],
    },
    {
        title: "Portfolio",
        link: "https://github.com/luc-silva/portfolio",
        introduction: { pt_br: "", en_us: "" },
        description: { pt_br: "", en_us: "" },
        images: [
            "project-portfolio-1.png",
            "project-portfolio-2.png",
            "project-portfolio-3.png",
        ],
        tags: ["TS", "ReactJS"],
    },
    {
        title: "Etch-A-Sketch",
        link: "https://github.com/luc-silva/Etch-A-Sketch",
        introduction: { pt_br: "", en_us: "" },
        description: { pt_br: "", en_us: "" },
        images: ["project-etchasketch-1.png", "project-etchasketch-2.png"],
        tags: ["JS", "HTML", "CSS"],
    },
    {
        title: "Calculator",
        link: "https://github.com/luc-silva/calculator",
        introduction: { pt_br: "", en_us: "" },
        description: { pt_br: "", en_us: "" },
        images: ["project-calculator-1.png"],
        tags: ["JS", "HTML", "CSS"],
    },
];

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
        name: { pt_br: "Spread Fullstack Developer Bootcamp", en_us: "Spread Fullstack Developer Bootcamp" },
        company: "Digital Innovation One",
        company_site: "https://www.dio.me/en",
        info_active: false,
        additional_info: {
            en_us: "",
            pt_br: "",
        },
        completition_date: "09/06/2022",
        length: 98,
    },
    {
        tags: ["MongoDB", "NoSQL", "NodeJS"],
        certImage: "cert-mongodbnodejspath.png",
        name: { pt_br: "MongoDB Node.js Developer Path", en_us: "MongoDB Node.js Developer Path" },
        company: "MongoDB University",
        company_site: "https://learn.mongodb.com/",
        info_active: false,
        additional_info: {
            en_us: "",
            pt_br: "",
        },
        completition_date: "02/17/2022",
        length: 12,
    },
    {
        tags: ["ReactJS", "Dot Net", "SQL"],
        certImage: "cert-intermediatewebdev.jpg",
        name: {
            pt_br: "Desenvolvimento de Sistemas Web Intermediário",
            en_us: "Intermediate Web Development",
        },
        company: "Recode",
        company_site: "https://recode.org.br/",
        info_active: false,
        additional_info: {
            en_us: "Course completion date and certificate issuance do not match**",
            pt_br: "Data de conclusão do curso e emissão do certificado não se condizem**",
        },
        completition_date: "31/05/2022",
        length: 40,
    },
    {
        tags: ["Javascript", "HTML & CSS", "Bootstrap", "SQL", "SCRUM"],
        certImage: "cert-basicwebdev.jpg",
        name: { pt_br: "Desenvolvimento de Sistemas Web Básico", en_us: "Basic Web Development" },
        company: "Recode",
        company_site: "https://recode.org.br/",
        info_active: false,
        additional_info: {
            en_us: "Course completion date and certificate issuance do not match**",
            pt_br: "Data de conclusão do curso e emissão do certificado não se condizem**",
        },
        completition_date: "20/04/2022",
        length: 40,
    },
];

export const tools: ITool[] = [
    {
        name: "Javascript",
        alt: "Javascript logo",
        toolImage: "logo-javascript.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "Typescript",
        alt: "Typescript logo",
        toolImage: "logo-typescript.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "ReactJS",
        alt: "ReactJS logo",
        toolImage: "logo-reactjs.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "NodeJS",
        alt: "NodeJS logo",
        toolImage: "logo-nodejs.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "Java",
        alt: "Java logo",
        toolImage: "logo-java.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "Docker",
        alt: "Docker logo",
        toolImage: "logo-docker.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "Ubuntu",
        alt: "Ubuntu logo",
        toolImage: "logo-ubuntu.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "MongoDB",
        alt: "MongoDB logo",
        toolImage: "logo-mongo.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "HTML",
        alt: "HTML logo",
        toolImage: "logo-html.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "CSS",
        alt: "CSS logo",
        toolImage: "logo-css.png",
        info_active: false,
        additional_info: {
            pt_br: "",
            en_us: "",
        },
    },
    {
        name: "SQL",
        alt: "SQL logo",
        toolImage: "logo-sql.png",
        info_active: false,
        additional_info: {
            pt_br: "Experiência acadêmica.",
            en_us: "Academic Experience",
        },
    },
];
