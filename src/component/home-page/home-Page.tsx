import style from './home-page.module.css'
import Header from "../header/header.tsx";
import {NavLink} from "react-router-dom";

const HomePage = () => {
    return (
        <>
            <div className={style.wrapper}>
                <Header/>
                <div className={style.rotatedRectangle}>
                </div>
                <div className={style.content}>
                    <div className={style.me}>
                        <h2>
                            Hi, i am
                        </h2>
                        <h1>
                            Madi Aslan
                        </h1>
                        <span>
                        Front-end Developer
                            </span>
                    </div>
                    <div className={style.contacts}>
                        <button>
                            <NavLink to='https://mail.google.com/mail/u/0/'>
                                <img src="/mail.svg" alt=""/>
                            </NavLink>
                        </button>
                        <button>
                            <NavLink to='https://github.com/Madiaslanov'>
                                <img src="/git.svg" alt=""/>
                            </NavLink>
                        </button>
                        <button>
                            <NavLink to='https://www.linkedin.com/in/madi-aslan/'>
                                <img src="/link.svg" alt=""/>
                            </NavLink>
                        </button>
                    </div>
                </div>
                <img className={style.myPhoto} src="/me.jpg" alt=""/>
            </div>
        </>
    );
};

export default HomePage;