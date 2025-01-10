const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');

const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
}, { timestamps: true });

module.exports = Course;
