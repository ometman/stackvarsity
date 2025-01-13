// models/Grade.js
const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');
const Course = require('./Course');

const Grade = sequelize.define('Grade', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    grade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    comments: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,
    paranoid: true,
    tableName: 'grades'
});

// Relationships with constraints
Grade.belongsTo(Student, { 
    foreignKey: 'student_id', 
    as: 'student',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});
Grade.belongsTo(Course, { 
    foreignKey: 'course_id', 
    as: 'course',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Grade;
