'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('certificates', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      student_id: {
        type: Sequelize.UUID,
        references: {
          model: 'students',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      course_id: {
        type: Sequelize.UUID,
        references: {
          model: 'courses',
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: false
      },
      issue_date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      certificate_url: {
        type: Sequelize.STRING,
        validate: {
          isUrl: true
        }
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('certificates');
  }
};
