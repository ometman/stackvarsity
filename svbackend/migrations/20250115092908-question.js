'use strict';

/** @type {import('sequelize-cli').Migration} */
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('questions', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
      },
      question_text: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      question_type: {
        type: Sequelize.ENUM('multiple_choice', 'true_false', 'short_answer'),
        allowNull: false
      },
      quiz_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'quizzes',  // Assumes a 'quizzes' table exists
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
    await queryInterface.dropTable('questions');
  }
};
