module.exports = (sequelize, DataTypes) => {
    const LessonProgress = sequelize.define('LessonProgress', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      lesson_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'lessons',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      status: {
        type: DataTypes.ENUM('not_started', 'in_progress', 'completed'),
        defaultValue: 'not_started',
        allowNull: false,
      },
      progress_score: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0, // Range: 0 - 100
        allowNull: false,
        validate: { min: 0, max: 100 }
      },
      completed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: 'lesson_progress',
      timestamps: true,
      underscored: true,
    });
  
    LessonProgress.associate = (models) => {
      LessonProgress.belongsTo(models.User, { foreignKey: 'user_id' });
      LessonProgress.belongsTo(models.Lesson, { foreignKey: 'lesson_id' });
    };
  
    return LessonProgress;
  };
  