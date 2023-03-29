import React from "react";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Layouts from "../layouts/Layouts"
import Home from "../pages/home/Home";
import Error404 from "../pages/error/Error404";

// import ApartmentSheet from "../pages/ApartmentSheet/ApartmentSheet";
// import About from "../pages/About/About";




function RoutesPath() {
    return(
        <HashRouter>
            <Layouts>
                <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Home />}/>
                    {/* <Route path="/logement/:id" element={<ApartmentSheet />}/>
                    <Route path="/a-propos" element={<About />}/>*/}
                    <Route path="*" element={<Error404 />}/>
                </Routes>
            </Layouts>
        </HashRouter>
    );
}

export default RoutesPath;