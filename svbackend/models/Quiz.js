const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Course = require('./Course');

const Quiz = sequelize.define('Quiz', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT,
    total_score: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { timestamps: true, paranoid: true });

Quiz.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });

module.exports = Quiz;
