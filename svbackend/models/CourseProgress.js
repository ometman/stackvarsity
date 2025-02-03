module.exports = (sequelize, DataTypes) => {
    const CourseProgress = sequelize.define('CourseProgress', {
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
      course_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'courses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      number_of_modules: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Updated dynamically
      },
      status: {
        type: DataTypes.ENUM('not_started', 'in_progress', 'completed'),
        defaultValue: 'not_started',
        allowNull: false,
      },
      progress_score: {
        type: DataTypes.FLOAT,
        defaultValue: 0.0, // Range: 0 - 100
        validate: { min: 0, max: 100 },
        allowNull: false,
      },
      completed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: 'course_progress',
      timestamps: true,
      underscored: true,
    });
  
    CourseProgress.associate = (models) => {
      CourseProgress.belongsTo(models.User, { foreignKey: 'user_id' });
      CourseProgress.belongsTo(models.Course, { foreignKey: 'course_id' });
    };
  
    return CourseProgress;
  };
  