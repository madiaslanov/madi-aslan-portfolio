import './App.css'
import {Route, Routes} from "react-router-dom";
import HomePage from "../component/home-page/home-Page.tsx";
import AboutMe from "../component/aboutMe/aboutMe.tsx";
import Skills from "../component/skills/skills.tsx";
import Portfolio from "../component/portfolio/portfolio.tsx";
import Contact from "../component/contact/contact.tsx";
import Footer from "../component/footer/footer.tsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<><HomePage/><AboutMe/><Skills/><Portfolio/><Contact/><Footer/></>}/>
        </Routes>

    )
}

export default App
