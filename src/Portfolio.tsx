import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/Misc/ScrollToTop";
import { Header } from "./components/Header/Header";
import { HamburguerMenu } from "./components/Header/HambuguerMenu";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Project } from "./pages/Project";
import { Footer } from "./components/Footer/Footer";

import "./global.css";
import { useState } from "react";

function Portfolio() {
    let [isHeaderMenuActive, toggle] = useState(false);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Header
                isHeaderMenuActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
            <HamburguerMenu
                isActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/projects" element={<Project />} /> 
            </Routes>
            {/* <Footer /> */}
        </Router>
    );
}

export default Portfolio;
