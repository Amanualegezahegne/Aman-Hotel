import React from "react";
import AdminSidebar from "../components/Adminsidebar.jsx";
import "../styles/dashboard.css";
import "../styles/ManageRooms.css";


export default function ManageRooms() {
  return (
    <div className="admin-layout">
      <AdminSidebar />
      <main className="dashboard-content">
        <h1>Manage Rooms</h1>
        <button className="add-btn">Add Room</button>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Room Name</th>
              <th>Price</th>
              <th>Capacity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Deluxe Room</td>
              <td>$120</td>
              <td>2</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Suite</td>
              <td>$200</td>
              <td>4</td>
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
