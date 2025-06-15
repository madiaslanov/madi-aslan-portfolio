import style from './portfolio.module.css';
import {myApps} from "../../service/skill-list.ts";
import {NavLink} from "react-router-dom";
const Portfolio = () => {

    return (
        <div>
            <section id="portfolio">
                <div className={style.portfolioHolder}>
                    <div className={style.portfolioBg}>
                        <h2>
                            PORTFOLIO
                        </h2>
                    </div>
                </div>
                <div className={style.portfolioContent}>
                    <h2>
                        MY PROJECTS
                    </h2>
                    <span>

                </span>
                    <div className={style.sliderHolder}>
                        <div className={style.slider}>
                            {[...myApps, ...myApps].map((item, index) => (
                                <NavLink to={item.link}  key={index}>
                                    <img src={item.src} alt="slider" className={style.sliderImage}/>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <p>
                        And many more to come!
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;