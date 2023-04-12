import React from "react";
import HearderNav from "../Header/header-nav"
import Footer from "../footer";


export default function MainLayout({ children }) {
    return (
        <>
            <HearderNav />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

