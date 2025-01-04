const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Student = require('./student');
const Course = require('./course');

const Grade = sequelize.define('Grade', {
    grade: DataTypes.STRING,
    comments: DataTypes.TEXT
}, { timestamps: true });

// Relationships
Grade.belongsTo(Student, { foreignKey: 'student_id' });
Grade.belongsTo(Course, { foreignKey: 'course_id' });

module.exports = Grade;
