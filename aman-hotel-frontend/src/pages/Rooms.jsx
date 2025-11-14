import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard.jsx";
import "../styles/Rooms.css";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Example static data
        setRooms([
            { id: 1, name: "Deluxe Room", price: 150, short_description: "Spacious room", image: "/assets/img/room-1.jpg" },
            { id: 2, name: "Single Room", price: 80, short_description: "Cozy and quiet", image: "/assets/img/room-2.jpg" },
        ]);
    }, []);

    return (
        <section className="rooms-page container">
            <h2>All Rooms</h2>
            <div className="rooms-grid">
                {rooms.map(room => <RoomCard key={room.id} room={room} />)}
            </div>
        </section>
    );
}
