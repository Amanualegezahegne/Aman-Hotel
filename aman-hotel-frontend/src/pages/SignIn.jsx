import React from "react";
import { Link } from "react-router-dom";
import "../styles/Signin.css";


export default function SignIn() {
    return (
        <div className="signin-container">
            <h2>Sign In</h2>

            <form className="signin-form">
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Sign In</button>
            </form>

            <p>
                Don’t have an account?{" "}
                <Link to="/register">Create Account</Link>
            </p>
        </div>
    );
}
