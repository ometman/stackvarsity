module.exports = (sequelize, DataTypes) => {
    const ModuleProgress = sequelize.define('ModuleProgress', {
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
      module_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: 'modules',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      number_of_lessons: {
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
        allowNull: false,
        validate: { min: 0, max: 100 }
      },
      completed_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    }, {
      tableName: 'module_progress',
      timestamps: true,
      underscored: true,
    });
  
    ModuleProgress.associate = (models) => {
      ModuleProgress.belongsTo(models.User, { foreignKey: 'user_id' });
      ModuleProgress.belongsTo(models.Module, { foreignKey: 'module_id' });
    };
  
    return ModuleProgress;
  };
  