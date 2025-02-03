'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('notifications', [
      {
        id: uuidv4(),
        message: 'Great job on the project! Keep up the good work.',
        target_audience: 'students',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        message: 'Remember to review the last module before the quiz.',
        target_audience: 'students',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        message: 'Excellent participation in the group discussions.',
        target_audience: 'students',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('notifications', null, {});
  }
};
