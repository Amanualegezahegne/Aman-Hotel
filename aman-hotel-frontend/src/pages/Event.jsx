import React from "react";
import "../styles/Event.css"; // make sure the path is correct

const events = [
    {
        id: 1,
        title: "Wedding Ceremony",
        date: "March 25, 2025",
        location: "Grand Hall",
        description:
            "A beautifully decorated hall perfect for dream weddings and celebrations.",
        image:
            "https://images.unsplash.com/photo-1529634806980-5e0ec3b22046?auto=format&fit=crop&w=900&q=60",
    },
    {
        id: 2,
        title: "Corporate Meeting",
        date: "April 5, 2025",
        location: "Conference Room A",
        description:
            "Fully equipped meeting room with projector, sound system, and catering service.",
        image:
            "https://images.unsplash.com/photo-1532619675605-1ede6d6f2cfc?auto=format&fit=crop&w=900&q=60",
    },
    {
        id: 3,
        title: "Birthday Party",
        date: "May 12, 2025",
        location: "Sunset Lounge",
        description:
            "Celebrate your birthday in style with fun decorations and a lively atmosphere.",
        image:
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=60",
    },
];

const Events = () => {
    return (
        <section className="events-section">
            <h2 className="events-title">Upcoming Events</h2>

            <div className="events-grid">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <img src={event.image} alt={event.title} className="event-image" />

                        <div className="event-content">
                            <h3 className="event-name">{event.title}</h3>

                            <p className="event-info">
                                📅 <span>{event.date}</span>
                            </p>
                            <p className="event-info">
                                📍 <span>{event.location}</span>
                            </p>

                            <p className="event-description">{event.description}</p>

                            <button className="event-btn">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Events;
