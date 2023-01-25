import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { ScrollToTop } from "./Components/Misc/ScrollToTop";
import { Project } from "./Components/Project/Project";

import "./global.css";

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Header />
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
