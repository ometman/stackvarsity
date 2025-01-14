const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');
const Course = require('./Course');

const Enrollment = sequelize.define('Enrollment', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    enrollment_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    status: {
        type: DataTypes.ENUM('enrolled', 'in progress', 'completed', 'dropped'),
        allowNull: false,
        defaultValue: 'active'
    }
}, { timestamps: true, 
    paranoid: true,
    tableName: 'enrollments'
});

Enrollment.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });
Enrollment.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE', onUpdate: 'CASCADE' });

module.exports = Enrollment;
