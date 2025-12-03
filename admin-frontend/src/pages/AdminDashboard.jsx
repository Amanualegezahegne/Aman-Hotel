import React, { useState } from "react";
import AdminSidebar from "../components/Adminsidebar.jsx";
import "../styles/dashboard.css";

export default function AdminDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

    return (
        <div className="admin-layout">
            {/* Sidebar */}
            <AdminSidebar sidebarOpen={sidebarOpen} />

            {/* Main content */}
            <main className="dashboard-content">
                {/* Hamburger button */}
                <button className="hamburger" onClick={toggleSidebar}>
                    &#9776;
                </button>

                <h1>Dashboard</h1>

                {/* Stats cards */}
                <div className="stats-cards">
                    <div className="card">
                        <h3>Total Rooms</h3>
                        <p>15</p>
                    </div>
                    <div className="card">
                        <h3>Bookings Today</h3>
                        <p>4</p>
                    </div>
                    <div className="card">
                        <h3>Total Users</h3>
                        <p>78</p>
                    </div>
                    <div className="card">
                        <h3>Messages</h3>
                        <p>12</p>
                    </div>
                </div>

                {/* Recent bookings table */}
                <div className="recent-bookings">
                    <h2>Recent Bookings</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Guest</th>
                                <th>Room</th>
                                <th>Check-in</th>
                                <th>Check-out</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>John Doe</td>
                                <td>Deluxe Room</td>
                                <td>Dec 1</td>
                                <td>Dec 3</td>
                                <td>Confirmed</td>
                            </tr>
                            <tr>
                                <td>Sarah Brown</td>
                                <td>Suite</td>
                                <td>Dec 2</td>
                                <td>Dec 5</td>
                                <td>Pending</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    );
}
