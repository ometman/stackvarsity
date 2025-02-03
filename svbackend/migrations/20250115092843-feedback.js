'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('feedbacks', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'students', // Must match actual table name
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      course_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'courses', // Must match actual table name
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      rating: {
        type: Sequelize.INTEGER,
        allowNull: true,
        validate: { min: 1, max: 5 }
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      shares_count: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
        validate: { min: 0 }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('feedbacks');
  }
};
