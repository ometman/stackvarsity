const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Module = require('./module');
const Lesson = require('./lesson');

const Project = sequelize.define('Project', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
}, { timestamps: true });

Project.belongsTo(Module, { foreignKey: 'module_id' });
Project.belongsTo(Lesson, { foreignKey: 'lesson_id' });

module.exports = Project;
