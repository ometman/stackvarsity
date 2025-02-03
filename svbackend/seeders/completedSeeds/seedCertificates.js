'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('certificates', [
      {
        id: uuidv4(),
        student_id: '74dc722c-2f24-48d8-b594-21b02dcc0efe',
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        issue_date: new Date(),
        certificate_url: 'https://www.example.com/certificate1.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        student_id: '74264cb0-bcfc-46af-8064-e97b2ba0dbbd',
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        issue_date: new Date(),
        certificate_url: 'https://www.example.com/certificate2.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        student_id: '551cc0b1-96e5-48b0-84a1-a646007011a4',
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        issue_date: new Date(),
        certificate_url: 'https://www.example.com/certificate3.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('certificates', null, {});
  },
};
