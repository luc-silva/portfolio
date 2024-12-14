const githubUrl = "https://api.github.com";
const mailing = "https://formspree.io/f/xpzeglae";

export const getRepositoryInfo = async (repository: string) => {
    const response = await fetch(`${githubUrl}/repos/luc-silva/${repository}`); 
    return await response.json();
};

export const getUserInfo = async (user: string) => {
    const response = await fetch(`${githubUrl}/users/${user}`);
    return await response.json();
};

export const sendEmail = async (body: FormData) => {
    const config = {
        method: "POST",
        body,
        mode: "no-cors" as RequestMode,
    };
    return await fetch(mailing, config);
};
