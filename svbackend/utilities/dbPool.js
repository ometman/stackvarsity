const { Pool } = require('pg');

const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Connect to PostgreSQL and log or catch eror
pool.connect()
  .then(() => console.log('PostgreSQL connected successfully - Pool'))
  .catch((err) => console.error('Error connecting to PostgreSQL - via Pool', err));


module.exports = pool;
