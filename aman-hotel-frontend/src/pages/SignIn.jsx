import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const submit = e => {
        e.preventDefault();
        alert("Signed in (mock). Redirect to Home.");
        navigate("/");
    };

    return (
        <div className="auth-page">
            <h2>Sign In</h2>
            <form onSubmit={submit}>
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}
