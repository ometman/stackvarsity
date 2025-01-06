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

pool.connect()
  .then(() => console.log('PostgreSQL connected successfully'))
  .catch((err) => console.error('Error connecting to PostgreSQL', err));


module.exports = pool;

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance with PostgreSQL
const sequelize = new Sequelize(pool.database, pool.user, pool.password, {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;
