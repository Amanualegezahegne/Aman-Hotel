import React from "react";
import { Link } from "react-router-dom";
import "../styles/RoomCard.css";

export default function RoomCard({ room }) {
    return (
        <article className="room-card">
            <img src={room.image} alt={room.name} className="room-img" />
            <div className="room-info">
                <h3>{room.name}</h3>
                <p className="price">${room.price} / night</p>
                <p className="desc">{room.short_description}</p>
                <Link to={`/rooms/${room.id}`} className="btn">View</Link>
            </div>
        </article>
    );
}
