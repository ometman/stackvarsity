'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('feedbacks', [
      {
        id: uuidv4(),
        rating: 5,
        comment: 'Amazing course! Learned a lot and the instructor was very engaging.',
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        shares_count: 34,
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        rating: 4,
        comment: 'Great content, but could use more examples.',
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        shares_count: 25, 
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        rating: 3,
        comment: 'The course was okay but lacked depth in some topics.',
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        shares_count: 17, 
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('feedbacks', null, {});
  }
};
