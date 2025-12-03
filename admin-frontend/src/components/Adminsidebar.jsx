import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/sidebar.css";

export default function AdminSidebar({ sidebarOpen }) {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("admin");
        navigate("/");
    };

    return (
        <aside className={`admin-sidebar ${sidebarOpen ? "active" : ""}`}>
            <h2 className="sidebar-title">Aman Admin</h2>

            <nav className="sidebar-nav">
                <NavLink to="/dashboard" className="nav-item">
                    Dashboard
                </NavLink>
                <NavLink to="/rooms" className="nav-item">
                    Manage Rooms
                </NavLink>
                <NavLink to="/bookings" className="nav-item">
                    Manage Bookings
                </NavLink>
                <NavLink to="/users" className="nav-item">
                    Manage Users
                </NavLink>
                <NavLink to="/messages" className="nav-item">
                    Messages
                </NavLink>
            </nav>

            <button className="logout-btn" onClick={handleLogout}>
                Logout
            </button>
        </aside>
    );
}
