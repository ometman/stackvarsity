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
    comment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    shares_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: { min: 0 } // Ensures no negative values
    }
}, { 
    timestamps: true, 
    tableName: 'feedbacks',
    paranoid: true 
});

// Associations
Feedback.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Feedback.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });

module.exports = Feedback;
