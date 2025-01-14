const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Subscription = require('./Subscription');

const Plan = sequelize.define('Plan', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [3, 50]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    duration: {
        type: DataTypes.ENUM('Monthly', 'Quarterly', 'Yearly', 'Lifetime'),
        allowNull: false
    },
    features: {
        type: DataTypes.JSONB, 
        allowNull: true,
        defaultValue: [],
        validate: {
            isArray(value) {
                if (!Array.isArray(value)) {
                    throw new Error('Features must be an array of strings.');
                }
            }
        }
    }
}, { 
    timestamps: true,
    tableName: 'plans', 
    paranoid: true 
});

// Relationships
Plan.hasMany(Subscription, { 
    foreignKey: 'plan_id',
    as: 'subscriptions',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
});

Subscription.belongsTo(Plan, { 
    foreignKey: 'plan_id',
    as: 'plan',
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE'
});

module.exports = Plan;
