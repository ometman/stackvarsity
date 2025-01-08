const { Sequelize } = require('sequelize');
const hstore = require('pg-hstore')();
const config = require('../config/config.json').development;

// Initialize Sequelize instance with PostgreSQL
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false,
    pool: {
      max: 5, // max no. of connections in pool
      min: 0, // min. no. of connections maintained in pool
      acquire: 30000, // max time, in ms, for idle connection b4 released
      idle: 10000, // max time, in ms, for idle connection in pool b4  released
    },
});



  module.exports = sequelize;