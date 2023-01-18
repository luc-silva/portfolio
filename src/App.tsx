import React from "react";
import { AboutMe } from "./Components/AboutMe";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { Home } from "./Components/Home";

import "./global.css"

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <AboutMe />
            <Footer />
        </div>
    );
}

export default App;
