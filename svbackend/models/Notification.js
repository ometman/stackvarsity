const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');

const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false
    },
    target_audience: {
        type: DataTypes.ENUM('students', 'admins', 'all'),
        allowNull: false
    }
}, { timestamps: true, paranoid: true });

module.exports = Notification;
