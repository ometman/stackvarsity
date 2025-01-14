const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const User = require('./User');
const Plan = require('./Plan');

const Subscription = sequelize.define('Subscription', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: true
        }
    },
    status: {
        type: DataTypes.ENUM('Active', 'Expired', 'Suspended', 'Cancelled', 'Trial'),
        defaultValue: 'Trial',
        allowNull: false
    },
    renewal_count: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    renewal_frequency: {
        type: DataTypes.ENUM('Monthly', 'Yearly'),
        allowNull: true
    },
    auto_renew: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: true,
    paranoid: true,
    tableName: 'subscriptions'
});

// Relationships
Subscription.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'user',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

Subscription.belongsTo(Plan, { 
    foreignKey: 'plan_id', 
    as: 'plan',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

Plan.hasMany(Subscription, { 
    foreignKey: 'plan_id', 
    as: 'subscriptions',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

User.hasMany(Subscription, { 
    foreignKey: 'user_id', 
    as: 'subscriptions',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});

module.exports = Subscription;
