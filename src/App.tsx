import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./Components/Misc/ScrollToTop";
import { Header } from "./Components/Header/Header";
import { HeaderHamburguerMenu } from "./Components/Header/HeaderHambuguerMenu";
import { Home } from "./Components/Home/Home";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Project } from "./Components/Project/Project";
import { Footer } from "./Components/Footer/Footer";

import "./global.css";
import { useState } from "react";

function App() {
    let [isHeaderMenuActive, toggle] = useState(false);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Header
                isHeaderMenuActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
            <HeaderHamburguerMenu
                isActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Project />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
