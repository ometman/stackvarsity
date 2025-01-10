const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const { v4: uuidv4 } = require('uuid');
const User = require('./User');

// Define the Student model with appropriate attributes and validations
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
        allowNull: true
    },
    level: {
        type: DataTypes.STRING,
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
  as: 'user' 
}); 



module.exports = Student;
