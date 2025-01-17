const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const { v4: uuidv4 } = require('uuid');
const AdminRole = require('./AdminRole');
const User = require('./User');

const Admin = sequelize.define('Admin', {
    id: {
        type: DataTypes.UUID,
        defaultValue: uuidv4, // Generate unique UUID for each admin
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
}, {
    timestamps: true,     // Adds createdAt and updatedAt fields
    paranoid: true,       // Enables soft deletion with deletedAt
    tableName: 'admins',  // Explicit plural table name for consistency
    hooks: {
        beforeCreate: (admin) => {
           // admin.email = admin.email.toLowerCase(); // Normalize email case
        }
    }
});

// Define the relationship between Admin and AdminRole and users
Admin.belongsTo(AdminRole, { 
    foreignKey: 'role_id', 
    as: 'role' 
});

Admin.belongsTo(User, { 
    foreignKey: 'user_id', 
    as: 'user'  // Alias for the relationship
});

module.exports = Admin;
