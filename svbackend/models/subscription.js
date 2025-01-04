const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Subscription = sequelize.define('Subscription', {
    plan_name: DataTypes.STRING,
    start_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    end_date: DataTypes.DATE,
    status: {
        type: DataTypes.STRING,
        defaultValue: 'Active'
    }
}, { timestamps: true });

// Relationship
Subscription.belongsTo(User, { foreignKey: 'user_id' });

module.exports = Subscription;
