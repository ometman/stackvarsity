const { DataTypes } = require('sequelize');
const sequelize = require('../utilities/dbSequel');
const Student = require('./Student');

const OverallProgress = sequelize.define('OverallProgress', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    student_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: Student,
            key: 'id'
        },
        onDelete: 'CASCADE'
    },
    status: {
        type: DataTypes.ENUM('not_started', 'in_progress', 'completed'),
        defaultValue: 'not_started',
        allowNull: false
    },
    progress_percent: {
        type: DataTypes.DECIMAL(5, 2),
        defaultValue: 0.00,
        validate: { min: 0, max: 100 }
    },
    completed_at: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'overall_progress',
    timestamps: true, 
    paranoid: true,  // Enables soft delete (requires deletedAt)
    underscored: true
});

// Define Associations
OverallProgress.associate = (models) => {
    OverallProgress.belongsTo(models.Student, { 
        foreignKey: 'student_id', onDelete: 'CASCADE' 
    });
};

module.exports = OverallProgress;

