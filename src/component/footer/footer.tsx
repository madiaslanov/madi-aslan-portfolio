import style from './footer.module.css';
import BackToTop from "../../service/backToTop/backToTop.tsx";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div className={style.footerHolder}>
            <div className={style.toTop}>
                <BackToTop/>
            </div>
            <div className={style.footerContact}>
                <NavLink to='https://www.linkedin.com/in/madi-aslan/'><img src="/footerElem/link.svg" alt=""/></NavLink>
                <NavLink to='https://www.instagram.com/madiaslanov/'><img src="/footerElem/inst.svg" alt=""/></NavLink>
                <NavLink to='https://mail.ru/'><img src="/footerElem/email.svg" alt=""/></NavLink>

            </div>
            <p>@2025 Madi Aslan All Rights Reserved.</p>
        </div>
    );
};

export default Footer;