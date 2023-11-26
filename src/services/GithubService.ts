class GithuService {
    private base_url = "https://api.github.com";

    public async getRepositoryInfo(repository_name: string):Promise<GithubRepository> {
        return await fetch(
            `${this.base_url}/repos/luc-silva/${repository_name}`
        ).then((data) => {
            return data.json();
        });
    }

    public async getUserInfo(user_name: string):Promise<GithubUser> {
        return await fetch(`${this.base_url}/users/${user_name}`).then(
            (data) => {
                return data.json();
            }
        );
    }
}

export default new GithuService();
