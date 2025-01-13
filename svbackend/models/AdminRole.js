const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');

const AdminRole = sequelize.define('AdminRole', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
        primaryKey: true,
        allowNull: false
    },
    role_name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,  // Prevents duplicate roles
        validate: {
            notEmpty: true,
            len: [3, 50]  // Ensures the role name is between 3 and 50 characters
        }
    },
    permissions: {
        type: DataTypes.JSONB,  // Storing permissions as an array of strings
        allowNull: false,
        defaultValue: [],  // Default to an empty array if no permissions provided
        validate: {
            isArray(value) {
                if (!Array.isArray(value)) {
                    throw new Error('Permissions must be an array of strings.');
                }
            }
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    }
}, {
    timestamps: true,    // Automatically handles createdAt and updatedAt
    paranoid: true,      // Enables soft deletion with the 'deletedAt' column
    tableName: 'admin_roles',  // Explicitly setting the table name
    hooks: {
        beforeCreate: (role) => {
            role.role_name = role.role_name.toLowerCase(); // Normalize role names
        }
    }
});

module.exports = AdminRole;
