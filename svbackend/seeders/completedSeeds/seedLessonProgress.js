'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('lesson_progress', [
      {
        id: uuidv4(),
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        lesson_id: 'b51075e4-b23b-4131-ae90-9fdbfaa814c7',
        status: 'completed',
        progress_percent: 100.00,
        completed_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        lesson_id: 'b51075e4-b23b-4131-ae90-9fdbfaa814c7',
        status: 'in_progress',
        progress_percent: 50.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        lesson_id: 'b51075e4-b23b-4131-ae90-9fdbfaa814c7',
        status: 'not_started',
        progress_percent: 0.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('lesson_progress', null, {});
  }
};
