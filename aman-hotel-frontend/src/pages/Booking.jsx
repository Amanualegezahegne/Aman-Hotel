import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Booking.css";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Booking() {
    const query = useQuery();
    const navigate = useNavigate();
    const roomId = query.get("room") || "";

    const [form, setForm] = useState({
        room_id: roomId,
        name: "",
        email: "",
        check_in: "",
        check_out: "",
        guests: 1,
    });

    const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const submit = (e) => {
        e.preventDefault();
        alert("Booking submitted!"); // placeholder
        navigate("/");
    };

    return (
        <section className="booking-page container">
            <h2>Book Room</h2>
            <form className="booking-form" onSubmit={submit}>
                <input name="name" placeholder="Full name" value={form.name} onChange={handleChange} required />
                <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input type="date" name="check_in" value={form.check_in} onChange={handleChange} required />
                <input type="date" name="check_out" value={form.check_out} onChange={handleChange} required />
                <input type="number" name="guests" min="1" value={form.guests} onChange={handleChange} />
                <button type="submit">Proceed to Payment</button>
            </form>
        </section>
    );
}
