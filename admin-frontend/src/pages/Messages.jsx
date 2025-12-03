import React from "react";
import AdminSidebar from "../components/Adminsidebar.jsx";
import "../styles/dashboard.css";
import "../styles/Messages.css";


export default function Messages() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="dashboard-content">
        <h1>Messages</h1>
        <table>
          <thead>
            <tr>
              <th>Message ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>Hello, I have a question.</td>
              <td>Dec 1</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sarah Brown</td>
              <td>sarah@example.com</td>
              <td>Booking inquiry</td>
              <td>Dec 2</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
