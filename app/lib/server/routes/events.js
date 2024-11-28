const fs = require('fs');
const path = require('path'); // Import the path module
const express = require('express');
const { Pool } = require('pg');
const config = require('../../../../config'); // Adjust path to your config.js

const router = express.Router();

// Set up PostgreSQL connection pool
const pool = new Pool({
    connectionString: config.POSTGRES_URL,
});

// Load the SQL query from the file
const addHistoricEventQuery = fs.readFileSync(
    path.join(__dirname, '../../../../db/queries/events/add_historic_event.sql'),
    'utf-8'
);

const getEventsQuery = fs.readFileSync(
    path.join(__dirname, '../../../../db/queries/events/get_historic_events.sql'),
    'utf-8'
);

// Function to handle event insertion
async function addHistoricEvent(req, res) {
    const { eventTitle, eventDescription, eventCity, eventState, eventCountry, eventDate } = req.body;

    try {
        // Execute the query
        await pool.query(addHistoricEventQuery, [
            eventTitle,
            eventDescription,
            eventCity,
            eventState,
            eventCountry,
            eventDate,
        ]);

        // Send success response
        res.json({ message: 'Event submitted successfully!' });
    } catch (error) {
        console.error('Error inserting event into database:', error);
        res.status(500).json({ message: 'Failed to insert event into the database' });
    }
}

// Function to fetch all events
async function getEvents(req, res) {
    try {
        // Execute the query to get events
        const result = await pool.query(getEventsQuery);

        // Send the events as response
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching events from database:', error);
        res.status(500).json({ message: 'Failed to fetch events' });
    }
}

// Define routes
router.post('/submit', addHistoricEvent);  // Route to submit an event
router.get('/events', getEvents);  // Route to fetch events

module.exports = router;
