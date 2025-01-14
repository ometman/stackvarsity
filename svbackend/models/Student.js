const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    primaryKey: true,
    allowNull: false
  },
  user_id: {
    type: DataTypes.UUID,
    references: { model: 'Users', key: 'id' },
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 40] 
    }
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [2, 40] 
    }
  },
  bio: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: true
  },
  registration_date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  },
  last_login: {
    type: DataTypes.DATE,
    allowNull: true
  },
  profile_picture: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isUrl: true, // Ensure it's a valid URL
      len: [0, 255], // Limit URL length
      is: /^.*\.(jpg|jpeg|png)$/i // Allow only jpg, jpeg, and png images
    }
  },
  level: {
    type: DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  timestamps: true,
  tableName: 'student',
  paranoid: true, // Optional: Soft deletes, if needed
  hooks: {
    beforeCreate: (student) => {
      // Add any additional logic before creating a student, if needed
    }
  }
});

// Define the relationship between Student and User
Student.belongsTo(User, { 
  foreignKey: 'user_id', 
  as: 'user',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE' 
}); 

module.exports = Student;