const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const AdminRole = require('./AdminRole');
const User = require('./User');

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, // Generate unique UUID for each admin
        primaryKey: true,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [2, 40]  // Enforce name length constraints
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true, // Ensure no duplicate emails
        validate: {
            isEmail: true, // Validates proper email format
            notEmpty: true
        }
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    password_salt: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    timestamps: true,     // Adds createdAt and updatedAt fields
    paranoid: true,       // Enables soft deletion with deletedAt
    tableName: 'admins',  // Explicit plural table name for consistency
    hooks: {
        beforeCreate: (admin) => {
            admin.email = admin.email.toLowerCase(); // Normalize email case
        }
    }
});

// Define the relationship between Admin and AdminRole and users
Admin.belongsTo(AdminRole, { 
    foreignKey: 'role_id', 
    as: 'role' 
});

module.exports = Admin;
