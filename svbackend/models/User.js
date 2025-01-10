const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
 const { v4: uuidv4 } = require('uuid');
const Subscription = require('./Subscription');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [6, 20],  // Username length between 4 and 20 characters
            isAlphanumeric: true // Only letters and numbers allowed  
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 40]
        }
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 40]
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true // Validates proper email format
        }
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_salt: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    role: {
        type: DataTypes.ENUM('student', 'admin'), // Enum for fixed roles
        allowNull: false,
        defaultValue: 'student'
    },
    is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true // New users are active by default
    },
}, { 
    timestamps: true,
    tableName: 'users',
    indexes: [
        { unique: true, fields: ['email'] }
    ] 
});

User.hasOne(Admin, { 
    foreignKey: 'user_id',
    as: 'admin' // 'user_id' is the foreign key in the Admin table
  }); 

User.hasOne(Student, { 
    foreignKey: 'user_id',
    as: 'student'
});

module.exports = User;
