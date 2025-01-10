const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const User = require('./User');

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
