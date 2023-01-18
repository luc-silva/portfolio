import React from "react";
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
        <div className="App">
            <Header />
            <Home />
            <AboutMe />
            <Skills />
            <Project />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
