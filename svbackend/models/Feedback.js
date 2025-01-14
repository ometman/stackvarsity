const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');
const Course = require('./Course');

const Feedback = sequelize.define('Feedback', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    rating: {
        type: DataTypes.INTEGER,
        validate: { min: 1, max: 5 }
    },
    comment: DataTypes.TEXT
}, { timestamps: true, paranoid: true });

Feedback.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Feedback.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });

module.exports = Feedback;
