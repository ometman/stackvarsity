 'use strict';
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('overall_progress', [
      {
        id: uuidv4(),
        progress_percent: 25,
        completed_at: '2024-01-20',
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        progress_percent: 50,
        completed_at: '2024-01-25',
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        progress_percent: 75,
        completed_at: '2024-02-10',
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('overall_progress', null, {});
  },
};
