import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#FFFFFF] flex flex-col justify-between">
            <Header />
            <main className="flex-grow py-16">{children}</main>
            {/* {children} */}
            <Footer />
        </div>
    );
};

export default Layout;
