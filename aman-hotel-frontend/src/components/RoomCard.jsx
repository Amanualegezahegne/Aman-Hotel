import React from "react";
import { Link } from "react-router-dom";
import "../styles/RoomCard.css";

export default function RoomCard({ room, user }) {
    // Determine where the button should go
    const linkTarget = user ? `/booking?roomId=${room.id}` : "/signin";

    return (
        <article className="room-card">
            <img src={room.image} alt={room.name} className="room-img" />
            <div className="room-info">
                <h3>{room.name}</h3>
                <p className="price">${room.price} / night</p>
                <p className="desc">{room.short_description}</p>

                {/* Smart Button */}
                <Link to={linkTarget} className="btn">
                    Book Now
                </Link>
            </div>
        </article>
    );
}
