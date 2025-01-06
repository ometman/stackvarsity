const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Course = require('./course');

const Module = sequelize.define('Module', {
    title: DataTypes.STRING,
    order_index: DataTypes.INTEGER
}, { timestamps: true });

Module.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Module;
