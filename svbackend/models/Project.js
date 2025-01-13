const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Module = require('./Module');

const Project = sequelize.define('Project', {
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
      len: [3, 255] 
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  due_date: {
    type: DataTypes.DATE,
    allowNull: true 
  },
  rubric: {
    type: DataTypes.TEXT,
    allowNull: true 
  },
  is_completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  completed_at: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  timestamps: true,
  paranoid: true,
  tableName: 'projects'
});

// Relationships
Project.belongsTo(Module, { 
  foreignKey: 'module_id', 
  as: 'module',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE'
});

module.exports = Project;