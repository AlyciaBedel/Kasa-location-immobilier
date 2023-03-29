import React from "react";
import Navbar from "../layouts/navbar/Navbar";
import Footer from "../layouts/footer/Footer";

function Layout({children}) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}

export default Layout;