'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('module_progress', [
      {
        id: uuidv4(),
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        module_id: '56efeab4-c83c-45ff-8946-b6629f9229d0',
        status: 'completed',
        progress_percent: 100.00,
        completed_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        module_id: '3a5c9d73-0f18-42c1-9fc2-b6d2961390a2',
        status: 'in_progress',
        progress_percent: 65.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        module_id: '0a6af787-850b-42f9-982c-4020ed634f60',
        status: 'not_started',
        progress_percent: 0.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('module_progress', null, {});
  }
};
