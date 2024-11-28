const { loadEnvConfig } = require('@next/env');

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const config = {
    POSTGRES_URL: process.env.POSTGRES_URL
};

module.exports = config;
