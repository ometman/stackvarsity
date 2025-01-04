// models/Course.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Your sequelize instance

const Course = sequelize.define('Course', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  students: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Course;
