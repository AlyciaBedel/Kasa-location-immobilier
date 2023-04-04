import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layouts from "../layouts/Layouts"
import Home from "../pages/home/Home";
import ApartmentSheet from "../pages/apartmentSheet/ApartmentSheet";
import About from "../pages/about/About";
import Error404 from "../pages/error/Error404";


function RoutesPath() {
    return (
        <Router>
            <Layouts>
                <Routes>
                    <Route path="/" element={<Navigate to="/accueil" replace />} />
                    <Route path="/accueil" element={<Home />} />
                    <Route path="/appartement" element={<ApartmentSheet />} />
                    <Route path="/apropos" element={<About />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </Layouts>
        </Router>
    );
}

export default RoutesPath;
