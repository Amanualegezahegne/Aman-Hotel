import React, { useState } from "react";
import "../styles/Contact.css"; // make sure the CSS file is in the same folder or adjust path

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
    };

    return (
        <div className="contact-container">
            <div className="contact-card">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtext">
                    Feel free to reach out. We’d love to hear from you!
                </p>

                <form onSubmit={handleSubmit}>

                    <label className="contact-label">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />

                    <label className="contact-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        className="contact-input"
                        required
                    />

                    <label className="contact-label">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="contact-input"
                    />

                    <label className="contact-label">Message</label>
                    <textarea
                        name="message"
                        placeholder="Type your message..."
                        value={formData.message}
                        onChange={handleChange}
                        className="contact-textarea"
                        required
                    ></textarea>

                    <button type="submit" className="contact-btn">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}
