const express = require('express');
const cors = require('cors');
const eventRoutes = require('./app/lib/server/routes/events'); // Import event routes

const app = express();

// Middleware to parse JSON data from the request body
app.use(express.json());
app.use(cors());  // Enable CORS for cross-origin requests

// Use the event routes
app.use('/events', eventRoutes);

// Start the server
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
