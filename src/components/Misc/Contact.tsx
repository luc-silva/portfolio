import { ChangeEvent, useContext, useState } from "react";
import { LanguageContext } from "../../Utils/LanguageContext"; 
import { contactByEmailText } from "../../constants/page-texts";
import styles from "./Contact.module.css";

export const Contact = () => {
    let [form, setForm] = useState({ email: "", subject: "", message: "" });
    let [submitActive, toggleSubmit] = useState(true);
    let {lang} = useContext(LanguageContext)

    function handleChange(event: ChangeEvent<HTMLElement>) {
        let target = event.target;
        if (
            target instanceof HTMLTextAreaElement ||
            target instanceof HTMLInputElement
        ) {
            setForm({ ...form, [target.name]: target.value });
        }
    }

    function handleEmailSubmit(event: React.FormEvent) {
        event.preventDefault();

        let target = event.target;
        if (target instanceof HTMLFormElement) {
            let formData = new FormData(target);
            fetch("https://formspree.io/f/xpzeglae", {
                method: "POST",
                body: formData,
                mode: "no-cors",
            }).then(() => {
                console.log("feito");
                toggleSubmit(false);
            });
        }
    }
    return (
        <>
            <div className={styles["contact__title"]}>
                <h2>{contactByEmailText.title[lang]}</h2>
            </div>
            <div className={styles["contact__form"]}>
                <form
                    onSubmit={handleEmailSubmit}
                    action="maito:lucas.silva1203@htomail.com"
                >
                    <div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="subject">{contactByEmailText.subject_input[lang]}</label>
                            <input
                                type="text"
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className={styles["input-container"]}>
                            <label htmlFor="email">{contactByEmailText.email_input[lang]}</label>
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
                            <label htmlFor="message">{contactByEmailText.message_input[lang]}</label>
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
                                value={contactByEmailText.submit_input[lang]}
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
