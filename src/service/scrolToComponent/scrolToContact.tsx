import style from './scrolToComponent.module.css';

const ScrollToContact = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.scroll}>
            <button className={style.contactScrollBtn} onClick={scrollToContact}>
                <p>Contact</p>
            </button>
        </div>
    );
};

export default ScrollToContact;
