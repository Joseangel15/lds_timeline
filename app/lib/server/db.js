const { Client } = require('pg');
const config = require('../../../config');

function getClient() {
    const client = new Client({
        connectionString: config.POSTGRES_URL,
    });
    return client;
}

module.exports = { getClient };
