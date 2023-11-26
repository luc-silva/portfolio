export const githubUserDefaultValue: GithubUser = {
    avatar_url: "",
    id: 0,
    login: "",
};

export const repositoryDefaulValue: GithubRepository = {
    allow_forking: false,
    archived: false,
    description: "",
    disabled: false,
    forks: 0,
    forks_count: 0,
    full_name: "",
    has_discussions: false,
    has_downloads: false,
    has_issues: false,
    has_pages: false,
    has_projects: false,
    has_wiki: false,
    homepage: "",
    id: "",
    is_template: false,
    language: "",
    license: "",
    name: "",
    open_issues: 0,
    open_issues_count: 0,
    owner: { ...githubUserDefaultValue },
    private: false,
    size: 0,
    stargazers_count: 0,
    topics: [],
    watchers: 0,
    watchers_count: 0,
};
