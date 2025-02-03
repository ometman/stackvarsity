'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('grades', [
      {
        id: uuidv4(),
        grade: 'A',
        comments: 'Excellent performance throughout the course.',
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        grade: 'B+',
        comments: 'Good work, but could improve in quizzes.',
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        grade: 'C',
        comments: 'Needs more focus on assignments.',
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        grade: 'A-',
        comments: 'Very consistent and performed well in group projects.',
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: '4731c938-797d-429c-b76f-ef8d655329d0',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        grade: 'B',
        comments: 'Good overall, but needs better participation in discussions.',
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: 'bc5bb33b-cef4-4190-9bb8-0216f663fb2e',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('grades', null, {});
  }
};
