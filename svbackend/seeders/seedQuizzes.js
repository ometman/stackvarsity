'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Quizzes', [
      {
        id: 'quiz_uuid1',
        title: 'Introduction to Web Development Quiz',
        description: 'A quiz to test basic web development knowledge including HTML, CSS, and JavaScript.',
        total_score: 100,
        course_id: 'course_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'quiz_uuid2',
        title: 'Advanced React Quiz',
        description: 'A quiz on advanced React concepts including Hooks, Context API, and Performance Optimization.',
        total_score: 100,
        course_id: 'course_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'quiz_uuid3',
        title: 'Backend API Quiz',
        description: 'A quiz covering RESTful API design, Express.js, and PostgreSQL concepts.',
        total_score: 100,
        course_id: 'course_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Quizzes', null, {});
  }
};
