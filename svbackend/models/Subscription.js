const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const User = require('./User');

const Subscription = sequelize.define('Subscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  plan_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [3, 50]
    }
  },
  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false,
    validate: {
      min: 0 
    }
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
      isDate: true,
      isAfter: DataTypes.NOW 
    }
  },
  status: {
    type: DataTypes.ENUM('Active', 'Expired', 'Suspended', 'Cancelled', 'Trial'), // Added Trial status
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

// Relationship: Each subscription belongs to one user
Subscription.belongsTo(User, { 
  foreignKey: 'user_id', 
  as: 'user' 
});

module.exports = Subscription;