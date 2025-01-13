const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Instructor = require('./Instructor');

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [3, 255]
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    category: {
        type: DataTypes.STRING,
        allowNull: true
    },
    level: {
        type: DataTypes.ENUM('Beginner', 'Intermediate', 'Advanced', 'Expert'),
        allowNull: false,
        defaultValue: 'Beginner'
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: true
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        validate: {
            min: 0
        }
    },
    image_url: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isUrl: true,
            len: [5, 255]
        }
    },
    is_published: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'courses',
    timestamps: true,
    paranoid: true
});

// Relationship with Instructor
Course.belongsTo(Instructor, { 
    foreignKey: 'instructor_id', as: 'instructor' 
});
Instructor.hasMany(Course, { 
    foreignKey: 'instructor_id', as: 'courses' 
});

// Relationship with User (as Instructor)
Course.belongsTo(User, { foreignKey: 'instructor_id', as: 'instructor' });
User.hasMany(Course, { foreignKey: 'instructor_id', as: 'courses' });

module.exports = Course;
