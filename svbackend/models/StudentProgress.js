const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');
const Course = require('./Course');
const Module = require('./Module');
const Lesson = require('./Lesson');

const StudentProgress = sequelize.define('StudentProgress', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    progress_percent: {
        type: DataTypes.FLOAT,
        defaultValue: 0,
        validate: { min: 0, max: 100 }
    },
    completed_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, { timestamps: true, paranoid: true });

StudentProgress.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
StudentProgress.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });
StudentProgress.belongsTo(Module, { foreignKey: 'module_id', onDelete: 'CASCADE' });
StudentProgress.belongsTo(Lesson, { foreignKey: 'lesson_id', onDelete: 'CASCADE' });

module.exports = StudentProgress;
