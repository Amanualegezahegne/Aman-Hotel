import React from "react";
import "../styles/About.css";

export default function About() {
    return (
        <div className="about-container">

            {/* Top Header */}
            <div className="about-header">
                <h1>About Aman Hotel</h1>
                <p>Your comfort and satisfaction is our top priority.</p>
            </div>

            {/* Main Section */}
            <div className="about-content">

                <img
                    src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                    alt="Hotel"
                    className="about-image"
                />

                <div className="about-text">
                    <h2>Welcome to Aman Hotel</h2>
                    <p>
                        Aman Hotel is a luxury hotel designed to provide an unforgettable
                        hospitality experience. We offer modern rooms, delicious food,
                        top-grade service, and a calm environment for both business and
                        leisure travelers.
                    </p>

                    <h3>Our Mission</h3>
                    <p>
                        To deliver high-quality hospitality services that exceed guest expectations.
                    </p>

                    <h3>Our Vision</h3>
                    <p>
                        To be the leading hotel recognized for comfort, cleanliness, and world-class service.
                    </p>
                </div>
            </div>

            {/* Services Section */}
            <div className="about-services">
                <h2>What We Offer</h2>
                <ul>
                    <li>✔ Luxury Rooms & Suites</li>
                    <li>✔ Fine Dining Restaurant</li>
                    <li>✔ Conference & Event Hall</li>
                    <li>✔ Free High-Speed Wi-Fi</li>
                    <li>✔ 24/7 Customer Support</li>
                </ul>
            </div>

        </div>
    );
}
