require('dotenv').config(); // Load environment variables
const { Pool } = require('pg');

// Use connection string for database connection
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

pool.on('connect', () => {
    console.log('Connected to the PostgreSQL database.');
});

pool.on('error', (err) => {
    console.error('Unexpected error on PostgreSQL client:', err.message);
    process.exit(-1);
});

module.exports = pool;
