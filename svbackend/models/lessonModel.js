const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Module = require('./moduleModel');

const Lesson = sequelize.define('Lesson', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    order_index: DataTypes.INTEGER
}, { timestamps: true });

Lesson.belongsTo(Module, { foreignKey: 'module_id' });

module.exports = Lesson;
