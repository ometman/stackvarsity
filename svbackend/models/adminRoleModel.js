const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const AdminRole = sequelize.define('AdminRole', {
    role_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: DataTypes.TEXT
}, { timestamps: true });

module.exports = AdminRole;
