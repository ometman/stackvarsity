'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('course_progress', [
      {
        id: uuidv4(),
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        status: 'completed',
        progress_percent: 100.00,
        completed_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        status: 'in_progress',
        progress_percent: 40.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        status: 'not_started',
        progress_percent: 0.00,
        completed_at: null,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('course_progress', null, {});
  }
};
