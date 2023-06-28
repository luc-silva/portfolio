import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { ScrollToTop } from "./components/Misc/ScrollToTop";
import { Header } from "./components/Header/Header";
import { HamburguerMenu } from "./components/Header/HamburguerMenu";
import { ImageModal } from "./components/ImageModal";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Project } from "./pages/Project";

import "./global.css";

function Portfolio() {
    let [isHeaderMenuActive, toggle] = useState(false);
    let [isCertificateModalActive, toggleCertificateModal] = useState(false);
    let [actualModalImage, setActualModalImage] = useState("");
    function handleImageModal() {
        toggleCertificateModal(!isCertificateModalActive);
    }

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <ImageModal
                toggleModal={handleImageModal}
                isActive={isCertificateModalActive}
                image={actualModalImage}
            />
            <Header
                isHeaderMenuActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
            <HamburguerMenu isActive={isHeaderMenuActive} toggleMenu={toggle} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/about-me"
                    element={
                        <AboutMe
                            setModalImage={setActualModalImage}
                            toggleImageModal={handleImageModal}
                        />
                    }
                />
                <Route path="/projects" element={<Project />} />
            </Routes>
        </Router>
    );
}

export default Portfolio;
