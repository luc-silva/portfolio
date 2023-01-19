import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Project } from "./Components/Project/Project";
import { Skills } from "./Components/Skills/Skills";

import "./global.css";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
