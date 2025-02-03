const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const { v4: uuidv4 } = require('uuid');
const Admin = require('./Admin');        // Import Admin model
const Student = require('./Student');    // Import Student model
const AdminRole = require('./AdminRole'); // Import AdminRole model

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
            len: [6, 20],  // Username length between 6 and 20 characters
            isAlphanumeric: true // Only letters and numbers allowed  
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

// Associations with constraints
User.hasOne(Admin, { 
    foreignKey: 'user_id',
    as: 'admin',
    onDelete: 'CASCADE',  // Delete related admin when the user is deleted
    onUpdate: 'CASCADE'   // Update foreign key when user id is updated
});
  
User.hasOne(Student, { 
    foreignKey: 'user_id',
    as: 'student',
    onDelete: 'CASCADE',  // Delete related student when the user is deleted
    onUpdate: 'CASCADE'   // Update foreign key when user id is updated
});
  
// Relationship with AdminRole
User.belongsTo(AdminRole, { 
    foreignKey: 'role_id', 
    as: 'role',
    onDelete: 'SET NULL',  // Set the role to null if the role is deleted
    onUpdate: 'CASCADE'    // Update foreign key when role id is updated
});
  
AdminRole.hasMany(User, { 
    foreignKey: 'role_id', 
    as: 'users',
    onDelete: 'SET NULL',  // Set the role to null if the role is deleted
    onUpdate: 'CASCADE'    // Update foreign key when role id is updated
});

module.exports = User;
