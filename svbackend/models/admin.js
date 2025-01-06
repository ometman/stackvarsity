const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const AdminRole = require('./adminRole');

const Admin = sequelize.define('Admin', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password_hash: DataTypes.STRING
}, { timestamps: true });

// Relationship
Admin.belongsTo(AdminRole, { foreignKey: 'role_id' });

module.exports = Admin;
