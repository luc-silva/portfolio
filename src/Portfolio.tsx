import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ScrollToTop } from "./components/Misc/ScrollToTop";
import { Header } from "./components/Header/Header";
import { HamburguerMenu } from "./components/Header/HambuguerMenu";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Project } from "./pages/Project";

import "./global.css";
import { useState } from "react";
import { ImageModal } from "./components/ImageModal";

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
            <HamburguerMenu isActive={isHeaderMenuActive} toggleMenu={toggle} />
            <ImageModal
                toggleModal={handleImageModal}
                isActive={isCertificateModalActive}
                image={actualModalImage}
            />
            <Header
                isHeaderMenuActive={isHeaderMenuActive}
                toggleMenu={toggle}
            />
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
