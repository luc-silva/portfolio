import { ChangeEvent, useContext, useState } from "react";
import styles from "./Contact.module.css";
import { LanguageContext } from "../../context/LanguageProvider";
import { contactByEmailText } from "../../constants/page-texts";
import EmailService from "../../services/EmailService";

export const Contact = () => {
    const [form, setForm] = useState({ email: "", subject: "", message: "" });
    const [submitActive, toggleSubmit] = useState(true);
    const { lang } = useContext(LanguageContext);

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

        const target = event.target;
        if (target instanceof HTMLFormElement) {
            const formData = new FormData(target);
            await EmailService.sendEmail(formData).then(() => {
                toggleSubmit(false);
            });
        }
    }
    return (
        <>
            <div className={styles["contact__title"]}>
                <h2>{contactByEmailText.title[lang.value]}</h2>
            </div>
            <div className={styles["contact__form"]}>
                <form
                    onSubmit={handleEmailSubmit}
                    action="maito:lucas.silva1203@htomail.com"
                >
                    <div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="subject">
                                {contactByEmailText.subject_input[lang.value]}
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
                                {contactByEmailText.email_input[lang.value]}
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
                                {contactByEmailText.message_input[lang.value]}
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
                                    contactByEmailText.submit_input[lang.value]
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