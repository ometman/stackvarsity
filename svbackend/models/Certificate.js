const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');
const Course = require('./Course');

const Certificate = sequelize.define('Certificate', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    issue_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    certificate_url: {
        type: DataTypes.STRING,
        validate: { isUrl: true }
    }
}, { timestamps: true, 
    tableName: 'certificates',
    paranoid: true 
});

Certificate.belongsTo(Student, { foreignKey: 'student_id', onDelete: 'CASCADE' });
Certificate.belongsTo(Course, { foreignKey: 'course_id', onDelete: 'CASCADE' });

module.exports = Certificate;
