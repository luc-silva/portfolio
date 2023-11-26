class EmailService {
    private base_url = "https://formspree.io/f/xpzeglae";

    public async sendEmail(body: FormData) {
        return await fetch(this.base_url, {
            method: "POST",
            body,
            mode: "no-cors",
        });
    }
}

export default new EmailService();
