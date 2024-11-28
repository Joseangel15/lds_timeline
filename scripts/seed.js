console.log("Hello World");

const { getClient } = require('../app/lib/server/db');

async function getAllRows() {
    const client = getClient();

    try {
        await client.connect(); // Connect to the database

        // Replace 'your_table_name' with the actual name of your table
        const res = await client.query('SELECT * FROM events_history');

        // Log the results
        console.log(res.rows); // res.rows contains all the rows returned by the query
    } catch (err) {
        console.error('Error executing query:', err.stack);
    } finally {
        await client.end(); // Close the connection
    }
}

getAllRows();
