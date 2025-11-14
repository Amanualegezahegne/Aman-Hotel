import React from "react";
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <p>© {new Date().getFullYear()} Aman Hotel — All rights reserved.</p>
            </div>
        </footer>
    );
}
