import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/Misc/ScrollToTop";
import { Header } from "./components/Header/Header";
import { HamburguerMenu } from "./components/Header/HamburguerMenu/HamburguerMenu";

import { AboutMe } from "./pages/AboutMe/AboutMe";
import { Project } from "./pages/Project/Project";

import "./global.css";
import { JobExperience } from "./pages/JobExperience/JobExperience";
import { ThemeProvider } from "./context/ThemeProvider";
import { LanguageProvider } from "./context/LanguageProvider";
import { ImageModal } from "./components/ImagemModal/ImageModal";
import { Home } from "./pages/Home/Home";

function Portfolio() {
    return (
        <ThemeProvider>
            <LanguageProvider>
                <Router basename={process.env.PUBLIC_URL}>
                    <>
                        <ScrollToTop />
                        <ImageModal />
                        <Header />
                        <HamburguerMenu />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-me" element={<AboutMe />} />
                            <Route path="/projects" element={<Project />} />
                            <Route path="/career" element={<JobExperience />} />
                        </Routes>
                    </>
                </Router>
            </LanguageProvider>
        </ThemeProvider>
    );
}

export default Portfolio;
