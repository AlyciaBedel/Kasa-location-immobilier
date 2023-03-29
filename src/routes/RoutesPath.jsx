import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layouts from "../layouts/Layouts"
import Home from "../pages/home/Home";
import ApartmentSheet from "../pages/apartmentSheet/ApartmentSheet";
import About from "../pages/about/About";
import Error404 from "../pages/error/Error404";


function RoutesPath() {
    return(
        <HashRouter>
            <Layouts>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Home />}/>
                    <Route path="/apartment" element={<ApartmentSheet />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="*" element={<Error404 />}/>
                </Routes>
            </Layouts>
        </HashRouter>
    );
}

export default RoutesPath;