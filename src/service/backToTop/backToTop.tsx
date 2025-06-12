import {useEffect, useState} from "react";
import style from "./backToTop.module.css"
const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
    const toggleVisibility = () => {
        if (window.scrollY > 300){
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    },[])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={style.toTop}>{
            isVisible && (
                <button onClick={scrollToTop}>
                    <img src="/footerElem/arrow.svg" alt=""/>
                    <p>
                        BACK TO TOP
                    </p>
                </button>
            )
        }
        </div>
    );
};

export default BackToTop;