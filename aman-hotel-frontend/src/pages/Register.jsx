import React, { useState } from "react";
import "../styles/Register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullname: "",
        email: "",
        phone: "",
        nationality: "",
        gender: "",
        address: "",
        idType: "",
        idNumber: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you will send user info to backend
        // After registration success → go to booking page

        navigate("/booking"); // redirect to booking page
    };

    return (
        <div className="register-container">
            <h2>Create Account / Guest Registration</h2>

            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullname"
                        required
                        value={form.fullname}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                    />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+251 900 000 000"
                    />
                </div>

                <div className="form-group">
                    <label>Nationality</label>
                    <input
                        type="text"
                        name="nationality"
                        required
                        value={form.nationality}
                        onChange={handleChange}
                        placeholder="e.g. Ethiopian"
                    />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select
                        name="gender"
                        required
                        value={form.gender}
                        onChange={handleChange}
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input
                        type="text"
                        name="address"
                        required
                        value={form.address}
                        onChange={handleChange}
                        placeholder="City, Country"
                    />
                </div>

                <div className="form-group">
                    <label>ID Type</label>
                    <select
                        name="idType"
                        required
                        value={form.idType}
                        onChange={handleChange}
                    >
                        <option value="">Select ID Type</option>
                        <option value="passport">Passport</option>
                        <option value="national">National ID</option>
                        <option value="driver">Driver License</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>ID Number</label>
                    <input
                        type="text"
                        name="idNumber"
                        required
                        value={form.idNumber}
                        onChange={handleChange}
                        placeholder="Enter ID number"
                    />
                </div>

                <button type="submit" className="register-btn">
                    Continue to Booking
                </button>
            </form>
        </div>
    );
}
