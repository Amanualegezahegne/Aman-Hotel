import React from "react";
import AdminSidebar from "../components/Adminsidebar.jsx";
import "../styles/dashboard.css";
import "../styles/ManageBooking.css";



export default function ManageBookings() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="dashboard-content">
        <h1>Manage Bookings</h1>
        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>Guest Name</th>
              <th>Room</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>101</td>
              <td>John Doe</td>
              <td>Deluxe Room</td>
              <td>Dec 1</td>
              <td>Dec 3</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>102</td>
              <td>Sarah Brown</td>
              <td>Suite</td>
              <td>Dec 2</td>
              <td>Dec 5</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
