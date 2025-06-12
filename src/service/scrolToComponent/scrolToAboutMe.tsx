import style from './scrolToComponent.module.css';

const ScrollToAboutMe = () => {
    const scrollAboutMe = () => {
        const element = document.getElementById("aboutMe");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.scroll}>
            <button onClick={scrollAboutMe}>
                <p>About me</p>
            </button>
        </div>
    );
};

export default ScrollToAboutMe;
