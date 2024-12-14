import { ChangeEvent, useContext, useState } from "react";
import { contactByEmailText } from "../../../constants/page-texts";
import styles from "./styles.module.css";
import { sendEmail } from "../../../services";
import { PortfolioContext } from "../../../context/PortfolioProvider";

export const Contact = () => {
    const [form, setForm] = useState({ email: "", subject: "", message: "" });
    const [submitActive, toggleSubmit] = useState(true);
    const { language } = useContext(PortfolioContext);

    function handleChange(event: ChangeEvent<HTMLElement>) {
        const target = event.target;
        if (
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLInputElement
        ) {
            setForm({ ...form, [target.name]: target.value });
        }
    }

    async function handleEmailSubmit(event: React.FormEvent) {
        event.preventDefault();

        let target = event.target;
        if (target instanceof HTMLFormElement) {
            let formData = new FormData(target);
            sendEmail(formData).then(() => {
                toggleSubmit(false);
            });
        }
    }
    return (
        <>
            <div className={styles["contact__title"]}>
                <h2>{contactByEmailText.title[language]}</h2>
            </div>
            <div className={styles["contact__form"]}>
                <form
                    onSubmit={handleEmailSubmit}
                    action="maito:lucas.silva1203@htomail.com"
                >
                    <div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="subject">
                                {contactByEmailText.subject_input[language]}
                            </label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="email">
                                {contactByEmailText.email_input[language]}
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="message">
                                {contactByEmailText.message_input[language]}
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles["input-container"]}>
                            <input
                                type="submit"
                                value={
                                    contactByEmailText.submit_input[language]
                                }
                                className={styles["submit"]}
                                disabled={!submitActive}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};
