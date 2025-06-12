import style from './scrolToComponent.module.css';

const ScrollToSkills = () => {
    const scrollSkills = () => {
        const element = document.getElementById("skills");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.scroll}>
            <button onClick={scrollSkills}>
                <p>Skills</p>
            </button>
        </div>
    );
};

export default ScrollToSkills;
