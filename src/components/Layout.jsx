import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col justify-between">
            <Header />
            <div className="flex-grow py-36">
                {children}
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
