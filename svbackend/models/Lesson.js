const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Module = require('./Module');

const Lesson = sequelize.define('Lesson', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 100]
        }
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    order_index: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1
        }
    }
}, {
    timestamps: true,
    paranoid: true,
    tableName: 'lessons'
});

// Relationships
Module.hasMany(Lesson, {
    foreignKey: 'module_id',
    as: 'lessons',
    onDelete: 'CASCADE', // Automatically delete lessons if the module is deleted
    onUpdate: 'CASCADE'
});

Lesson.belongsTo(Module, {
    foreignKey: 'module_id',
    as: 'module',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Lesson;

