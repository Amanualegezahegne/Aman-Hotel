import React from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
    const navigate = useNavigate();

    const pay = () => {
        alert("Payment successful (mock). Booking confirmed!");
        navigate("/");
    };

    return (
        <div className="payment-page">
            <h2>Payment</h2>
            <p>Choose your payment method:</p>
            <button onClick={pay}>Pay with Card</button>
            <button onClick={pay}>Pay with PayPal</button>
        </div>
    );
}
