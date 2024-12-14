import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/Misc/ScrollToTop";
import { Header } from "./components/Header/Header";
import { HamburguerMenu } from "./components/Header/HamburguerMenu";

import { AboutMe } from "./pages/AboutMe";

import "./global.css";
import { JobExperience } from "./pages/JobExperience";
import { ThemeProvider } from "./context/ThemeProvider";
import { ImageModal } from "./pages/AboutMe/ImagemModal";
import { Home } from "./pages/Home";
import { Project } from "./pages/Project";

function Portfolio() {
    return (
        <ThemeProvider>
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
        </ThemeProvider>
    );
}

export default Portfolio;
