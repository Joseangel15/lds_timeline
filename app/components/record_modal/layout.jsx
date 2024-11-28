"use client";

import { useState, useEffect } from "react";

export default function RecordModalLayout({ children }) {
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventDescription: "",
    eventCity: "",
    eventState: "",
    eventCountry: "",
    eventDate: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload

    // Send the form data to the server using fetch
    try {
      const response = await fetch("http://localhost:3001/events/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Send data as JSON
      });

      const result = await response.json(); // Parse the JSON response
      console.log("Server Response:", result); // Handle server response
      document.querySelector("dialog").close();
      setFormData({
        eventTitle: "",
        eventDescription: "",
        eventCity: "",
        eventState: "",
        eventCountry: "",
        eventDate: "",
      })
    } catch (error) {
      console.error("Error submitting form:", error); // Handle errors
      alert("Error submitting form. Please try again.");
    }
  };

  return (
    <dialog className="z-50 p-4 max-w-md w-full">
      <span onClick={() => document.querySelector("dialog").close()}>
        <i data-feather="x-circle" className="absolute top-4 right-4 cursor-pointer"></i>
      </span>
      <h1 className="text-2xl font-bold text-center pb-4">Add new event</h1>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="mb-2" htmlFor="eventTitle">
          Event:
        </label>
        <input
          type="text"
          id="eventTitle"
          name="eventTitle"
          className="text-black border mb-5"
          value={formData.eventTitle}
          onChange={handleChange}
          required
        />

        <label className="mb-2" htmlFor="eventDescription">
          Description:
        </label>
        <textarea
          id="eventDescription"
          name="eventDescription"
          className="text-black border mb-5"
          value={formData.eventDescription}
          onChange={handleChange}
          required
        />

        <label className="mb-2" htmlFor="eventCity">
          City:
        </label>
        <input
          type="text"
          id="eventCity"
          name="eventCity"
          className="text-black border mb-5"
          value={formData.eventCity}
          onChange={handleChange}
          required
        />

        <label className="mb-2" htmlFor="eventState">
          State:
        </label>
        <input
          type="text"
          id="eventState"
          name="eventState"
          className="text-black border mb-5"
          value={formData.eventState}
          onChange={handleChange}
          required
        />

        <label className="mb-2" htmlFor="eventCountry">
          Country:
        </label>
        <input
          type="text"
          id="eventCountry"
          name="eventCountry"
          className="text-black border mb-5"
          value={formData.eventCountry}
          onChange={handleChange}
          required
        />

        <label className="mb-2" htmlFor="eventDate">
          Date:
        </label>
        <input
          type="date"
          id="eventDate"
          name="eventDate"
          className="text-black border mb-5"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </dialog>
  );
}
