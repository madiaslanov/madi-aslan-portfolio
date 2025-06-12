import style from "./contact.module.css"
import SendMessageForm from "./sendMessageForm/sendMessageForm.tsx";

const Contact = () => {
    return (
        <section id="contact">
            <div className={style.contactHolder}>
                <div className={style.contactBorder}>
                    <p>
                        CONTACT
                    </p>
                </div>
                <div className={style.contactDesc}>
                    <p>Fill out the form below and I’ll get back to you as soon as possible.<br/>
                        Please include your name, email address, and a brief message — I’ll be happy to connect!</p>
                    <img src="/line.svg" alt=""/>
                </div>
                <SendMessageForm/>
            </div>
        </section>
    );
};

export default Contact;