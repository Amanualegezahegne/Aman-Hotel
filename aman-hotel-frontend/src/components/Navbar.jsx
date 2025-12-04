import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="site-header">
            <div className="container nav-inner">
                <Link to="/" className="brand" onClick={closeMenu}>
                    Aman Hotel
                </Link>

                <nav className={`nav ${open ? "open" : ""}`}>
                    <NavLink to="/" end onClick={closeMenu}>
                        Home
                    </NavLink>

                    <NavLink to="/rooms" onClick={closeMenu}>
                        Rooms
                    </NavLink>

                    {/* ✅ Added EVENTS here */}
                    <NavLink to="/events" onClick={closeMenu}>
                        Events
                    </NavLink>

                    <NavLink to="/about" onClick={closeMenu}>
                        About
                    </NavLink>

                    <NavLink to="/contact" onClick={closeMenu}>
                        Contact
                    </NavLink>

                    {/* SIGN IN BUTTON */}
                    <Link to="/signin" className="signin-btn" onClick={closeMenu}>
                        Sign In
                    </Link>
                </nav>

                <div
                    className={`hamburger ${open ? "active" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {open && <div className="overlay" onClick={closeMenu}></div>}
            </div>
        </header>
    );
}
