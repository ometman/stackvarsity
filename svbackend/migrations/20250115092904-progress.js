'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('progresses', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      progress_percent: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
        validate: { min: 0, max: 100 }
      },
      completed_at: {
        type: Sequelize.DATE,
        allowNull: true
      },
      student_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'students',  // Assumes a 'students' table exists
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      course_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'courses',  // Assumes a 'courses' table exists
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      module_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'modules',  // Assumes a 'modules' table exists
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      lesson_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'lessons',  // Assumes a 'lessons' table exists
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('progresses');
  }
};
