import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ManageRooms from "./pages/ManageRooms";
import ManageBookings from "./pages/ManageBookings";
import ManageUsers from "./pages/ManageUsers";
import Messages from "./pages/Messages";

// Function to protect routes
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("admin");
  return isLoggedIn ? children : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<AdminLogin />} />

        {/* Protected admin routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/rooms"
          element={
            <PrivateRoute>
              <ManageRooms />
            </PrivateRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <PrivateRoute>
              <ManageBookings />
            </PrivateRoute>
          }
        />

        <Route
          path="/users"
          element={
            <PrivateRoute>
              <ManageUsers />
            </PrivateRoute>
          }
        />

        <Route
          path="/messages"
          element={
            <PrivateRoute>
              <Messages />
            </PrivateRoute>
          }
        />

        {/* Catch all — redirect unknown routes to login */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
