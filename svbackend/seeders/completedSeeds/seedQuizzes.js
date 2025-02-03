'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('quizzes', [
      {
        id: uuidv4(),
        title: 'Introduction to Web Development Quiz',
        description: 'A quiz to test basic web development knowledge including HTML, CSS, and JavaScript.',
        total_score: 100,
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Advanced React Quiz',
        description: 'A quiz on advanced React concepts including Hooks, Context API, and Performance Optimization.',
        total_score: 100,
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Backend API Quiz',
        description: 'A quiz covering RESTful API design, Express.js, and PostgreSQL concepts.',
        total_score: 100,
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('quizzes', null, {});
  }
};
