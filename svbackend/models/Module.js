const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Course = require('./Course');

const Module = sequelize.define('Module', {
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
  order_index: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1 
    }
  },
  description: { 
    type: DataTypes.TEXT, 
    allowNull: true 
  } 
}, {
  timestamps: true,
  paranoid: true,
  tableName: 'modules'
});

// Relationships with constraints
Module.belongsTo(Course, { 
  foreignKey: 'course_id',
  as: 'course',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

Course.hasMany(Module, { 
  foreignKey: 'course_id', 
  as: 'modules',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = Module;