import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";

export default function AdminLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        if (username === "admin" && password === "1234") {
            localStorage.setItem("admin", "true");
            navigate("/dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="login-container">
            <h2>Admin Login</h2>

            <form onSubmit={handleLogin}>
                <input name="username" type="text" placeholder="Username" required />
                <input name="password" type="password" placeholder="Password" required />

                <button type="submit">Login</button>
            </form>

            {error && <p className="error">{error}</p>}
        </div>
    );
}
