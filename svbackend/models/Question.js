const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Quiz = require('./Quiz');

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    question_text: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    question_type: {
        type: DataTypes.ENUM('multiple_choice', 'true_false', 'short_answer'),
        allowNull: false
    }
}, { timestamps: true, 
    tableName: 'questions',
    paranoid: true 
});

Question.belongsTo(Quiz, { foreignKey: 'quiz_id', onDelete: 'CASCADE' });

module.exports = Question;
