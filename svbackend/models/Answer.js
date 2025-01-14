const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Question = require('./Question');

const Answer = sequelize.define('Answer', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    answer_text: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_correct: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, { timestamps: true, 
    tableName: 'answers',
    paranoid: true 
});

Answer.belongsTo(Question, { foreignKey: 'question_id', onDelete: 'CASCADE' });

module.exports = Answer;
