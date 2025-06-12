import style from "./header.module.css"
import ScrollToPortfolio from "../../service/scrolToComponent/scrollToPortfolio.tsx";
import ScrollToSkills from "../../service/scrolToComponent/scrolToSkills.tsx";
import ScrollToAboutMe from "../../service/scrolToComponent/scrolToAboutMe.tsx";
import ScrollToContact from "../../service/scrolToComponent/scrolToContact.tsx";

const Header = () => {
    return (
        <>
            <div className={style.holder}>
                <img src="/logo.png" alt=""/>
                <ul>
                    <li><ScrollToAboutMe/></li>
                    <li><ScrollToSkills/></li>
                    <li><ScrollToPortfolio/></li>
                    <li><ScrollToContact/></li>
                </ul>
            </div>
        </>
    );
};

export default Header;