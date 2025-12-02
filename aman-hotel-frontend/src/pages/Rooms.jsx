import React, { useEffect, useState } from "react";
import RoomCard from "../components/RoomCard.jsx";
import "../styles/Rooms.css";

export default function Rooms() {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        // Example static data
        setRooms([
            { id: 1, name: "Deluxe Rooms", price: 150, short_description: "Spacious or King size Bed rooms", image: "/assets/images/deluxe.jpg" },
            { id: 2, name: "Single Rooms", price: 100, short_description: "Cozy and quiet simple Bed rooms", image: "/assets/images/single.jpg" },
            { id: 3, name: "Family Rooms", price: 300, short_description: "Having suitable kids Bed rooms", image: "/assets/images/family.jpg" },
            { id: 4, name: "King size Rooms", price: 250, short_description: "Luxurious suite", image: "/assets/images/king.jpg" },
            { id: 5, name: "Double Bed Rooms", price: 400, short_description: "suitable for couples", image: "/assets/images/double.jpg" },
            { id: 6, name: "Special VIP Rooms", price: 500, short_description: "Cozy and quiet", image: "/assets/images/vip.jpg" }
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
