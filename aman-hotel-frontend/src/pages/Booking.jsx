import React, { useState } from "react";
import "../styles/Booking.css";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        checkin: "",
        checkout: "",
        guests: 1,
        roomType: "",
    });

    const [availability, setAvailability] = useState(null); // null = not checked, true/false = result

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setAvailability(null); // reset availability if user changes dates/type
    };

    const checkAvailability = (e) => {
        e.preventDefault();

        // ✅ Simulate availability check
        // You can replace this with a real backend API call
        const isAvailable = Math.random() > 0.2; // 80% chance room is available

        setAvailability(isAvailable);

        if (!isAvailable) {
            alert("Sorry, this room is not available for the selected dates.");
        }
    };

    const handleBooking = () => {
        // Redirect to payment page only if available
        if (availability) {
            navigate("/payment");
        }
    };

    return (
        <div className="booking-container">
            <h2>Book Your Room</h2>

            <form className="booking-form" onSubmit={checkAvailability}>
                <div className="form-group">
                    <label>Check-In Date</label>
                    <input
                        type="date"
                        name="checkin"
                        required
                        value={form.checkin}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Check-Out Date</label>
                    <input
                        type="date"
                        name="checkout"
                        required
                        value={form.checkout}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Number of Guests</label>
                    <input
                        type="number"
                        name="guests"
                        min="1"
                        max="5"
                        required
                        value={form.guests}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Room Type</label>
                    <select
                        name="roomType"
                        required
                        value={form.roomType}
                        onChange={handleChange}
                    >
                        <option value="">Select Room Type</option>
                        <option value="single">Single Room</option>
                        <option value="double">Double Room</option>
                        <option value="twin">Twin Room</option>
                        <option value="family">Family Suite</option>
                        <option value="luxury">Luxury Suite</option>
                    </select>
                </div>

                <button type="submit" className="book-btn">
                    Check Availability
                </button>
            </form>

            {/* Show Proceed Button Only if Available */}
            {availability && (
                <button className="book-btn proceed-btn" onClick={handleBooking}>
                    Proceed to Payment
                </button>
            )}
        </div>
    );
}
