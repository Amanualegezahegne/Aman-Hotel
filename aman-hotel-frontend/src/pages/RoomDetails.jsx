import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/RoomDetails.css";

export default function RoomDetails() {
    const { id } = useParams();
    const [room, setRoom] = useState(null);

    useEffect(() => {
        setRoom({ id, name: "Deluxe Room", price: 150, description: "Large bed and great view", image: "/assets/img/room-1.jpg" });
    }, [id]);

    if (!room) return <p>Loading...</p>;

    return (
        <section className="room-details container">
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p className="price">${room.price} / night</p>
            <Link to={`/booking?room=${room.id}`} className="btn">Book Now</Link>
        </section>
    );
}
