"use client";

import { useState, useEffect } from "react";

export default function TimelineLayout({ children }) {
  const [events, setEvents] = useState([]); // State to store events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  // Function to fetch events
  const fetchEvents = async () => {
    try {
      const response = await fetch("http://localhost:3001/events/events");
  
      if (response.ok) {
        const data = await response.json(); // Parse JSON response
  
        // Sort events by event_date in ascending order (oldest first)
        const sortedEvents = data.sort((a, b) => new Date(a.event_date) - new Date(b.event_date));
  
        // Update events state with sorted events
        setEvents(sortedEvents);
      } else {
        throw new Error("Failed to fetch events");
      }
    } catch (error) {
      setError(error.message); // Handle error
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  };

  // useEffect to fetch events when the component mounts
  useEffect(() => {
    fetchEvents(); // Call fetchEvents once on component mount
  }, []); // Empty dependency array means this runs once after the initial render

  // Render loading or error message if necessary
  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  function formatDate(dateString) {
    const date = new Date(dateString);

    const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month and pad with leading zero
    const day = String(date.getDate()).padStart(2, "0"); // Get day and pad with leading zero
    const year = date.getFullYear(); // Get the full year

    return `${month}/${day}/${year}`; // Return in mm/dd/yyyy format
  }

  console.log(events);

  return (
    <div className="timeline pt-10 max-h-screen overflow-auto w-full">
      {events.map((event, index) => (
        <div
          className={`container ${index % 2 === 0 ? "left" : "right"}`}
          key={event.id}
        >
          <div className="content">
            <h2>{event.event_title}</h2>
            <p>
              {event.event_city}, {event.event_state}, {event.event_country}
            </p>
            <p>{formatDate(event.event_date)}</p>
            <p>{event.event_description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
