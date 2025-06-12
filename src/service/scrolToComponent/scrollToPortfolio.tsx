import style from './scrolToComponent.module.css';

const ScrollToPortfolio = () => {
    const scrollToPortfolio = () => {
        const element = document.getElementById("portfolio");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={style.scroll}>
            <button onClick={scrollToPortfolio}>
                <p>Portfolio</p>
            </button>
        </div>
    );
};

export default ScrollToPortfolio;
