import style from './home-page.module.css'
import Header from "../header/header.tsx";
import {NavLink} from "react-router-dom";
import {useState} from "react";
import ScrollToAboutMe from "../../service/scrolToComponent/scrolToAboutMe.tsx";
import ScrollToSkills from "../../service/scrolToComponent/scrolToSkills.tsx";
import ScrollToContact from "../../service/scrolToComponent/scrolToContact.tsx";
import ScrollToPortfolio from "../../service/scrolToComponent/scrollToPortfolio.tsx";

const HomePage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => setIsOpen(!isOpen);

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
            <div className={style.mobile}>
                <div className={style.logo}>
                    <img className={style.logoImg} src="/mWhiteLogo.png" alt=""/>
                    <div className={style.menuWrapper} onClick={toggleOpen}>
                        <img
                            className={`${style.menuIcon} ${isOpen ? style.fadeOut : style.fadeIn}`}
                            src="/menu.png"
                            alt=""
                        />
                        <img
                            className={`${style.closeIcon} ${isOpen ? style.fadeIn : style.fadeOut} close`}
                            src="/mobile/close.svg"
                            alt=""
                        />
                    </div>
                </div>
                <div className={style.mobileContent}>
                    <div className={`${style.sideMenu} ${isOpen ? style.active : ''}`}>
                        <ul>
                            <li>
                                <button>
                                    <ScrollToAboutMe/>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <ScrollToSkills/>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <ScrollToPortfolio/>
                                </button>
                            </li>
                            <li>
                                <button>
                                    <ScrollToContact/>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <h2>
                        my name is Madi
                    </h2>
                    <h1>
                        I’M A DEVELOPER
                    </h1>
                    <img className={style.line} src="/mobile/whiteline.svg" alt=""/>
                    <div className={style.socialImgMobile}>
                        <NavLink to='https://mail.google.com/mail/u/0/'>
                            <img src="/mobile/whiteemail.svg" alt=""/>
                        </NavLink>
                        <NavLink to='https://github.com/Madiaslanov'>
                            <img src="/mobile/whitegit.svg" alt=""/>
                        </NavLink>
                        <NavLink to='https://www.linkedin.com/in/madi-aslan/'>
                            <img src="/mobile/whitelink.svg" alt=""/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;