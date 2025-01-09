const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [4, 20]  // Username length between 4 and 20 characters
        }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true  // Validates proper email format
        }
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { 
    timestamps: true 
});

module.exports = User;
