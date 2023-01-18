import React from "react";
import { AboutMe } from "./Components/AboutMe/AboutMe";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Home } from "./Components/Home/Home";
import { Project } from "./Components/Project";
import { Skills } from "./Components/Skills";

import "./global.css"

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <AboutMe />
            <Skills />
            <Project />
            <Footer />
        </div>
    );
}

export default App;
