import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const images = [
  "/src/assets/images/slider-1.jpg",
  "/src/assets/images/slider-2.jpg",
  "/src/assets/images/slider-3.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section
        className="hero"
        style={{ backgroundImage: `url(${images[current]})` }}
      >
        <div className="hero-content">
          <h1>Welcome to Aman Hotel</h1>
          <p>Your comfort is our priority</p>
          <Link to="/rooms" className="btn">
            Explore Rooms
          </Link>
        </div>
      </section>
    </main>
  );
}
