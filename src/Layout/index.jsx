import React, { useState } from "react";
import Navbar from "./navbar";
import App from "../App";
import Footer from "./footer";

function Layout() {

    return (

        <div className="bg-[#faf3f0]">
            <div className="relative">
            <Navbar />
            <App />
            <Footer />
            </div>
        </div>
    );
}

export default Layout;
