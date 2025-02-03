'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('questions', [
      {
        id: uuidv4(),
        question_text: 'What does HTML stand for?',
        question_type: 'multiple_choice',
        quiz_id: 'ac0bd5fa-1482-41d1-8b7a-5f8eddbeecd4',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'State the purpose of CSS Flexbox.',
        question_type: 'short_answer',
        quiz_id: 'ac0bd5fa-1482-41d1-8b7a-5f8eddbeecd4',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'What is the difference between var, let, and const?',
        question_type: 'multiple_choice',
        quiz_id: 'ac0bd5fa-1482-41d1-8b7a-5f8eddbeecd4',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'What is a React component?',
        question_type: 'multiple_choice',
        quiz_id: 'dd4fd942-0760-403c-919a-7383c0d0a8ed',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'Explain the concept of props in React.',
        question_type: 'short_answer',
        quiz_id: 'dd4fd942-0760-403c-919a-7383c0d0a8ed',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'What is the use of React Hooks?',
        question_type: 'multiple_choice',
        quiz_id: 'dd4fd942-0760-403c-919a-7383c0d0a8ed',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'Explain the concept of RESTful APIs.',
        question_type: 'short_answer',
        quiz_id: 'b49b2433-62f2-483e-82e9-8096d3395179',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'What is middleware in Express.js?',
        question_type: 'multiple_choice',
        quiz_id: 'b49b2433-62f2-483e-82e9-8096d3395179',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'How does PostgreSQL handle relational data?',
        question_type: 'short_answer',
        quiz_id: 'b49b2433-62f2-483e-82e9-8096d3395179',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        question_text: 'Explain the importance of indexing in databases.',
        question_type: 'multiple_choice',
        quiz_id: 'b49b2433-62f2-483e-82e9-8096d3395179',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('questions', null, {});
  }
};
