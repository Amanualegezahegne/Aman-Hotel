import React from "react";
import AdminSidebar from "../components/Adminsidebar.jsx";
import "../styles/dashboard.css";
import "../styles/ManageUsers.css";

export default function ManageUsers() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="dashboard-content">
        <h1>Manage Users</h1>
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registered</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>2025-12-01</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sarah Brown</td>
              <td>sarah@example.com</td>
              <td>2025-12-02</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
