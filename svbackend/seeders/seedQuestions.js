'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Questions', [
      {
        id: 'question_uuid1',
        question_text: 'What does HTML stand for?',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid2',
        question_text: 'Explain the purpose of CSS Flexbox.',
        question_type: 'open_ended',
        quiz_id: 'quiz_uuid1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid3',
        question_text: 'What is the difference between var, let, and const?',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid4',
        question_text: 'What is a React component?',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid2',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid5',
        question_text: 'Explain the concept of props in React.',
        question_type: 'open_ended',
        quiz_id: 'quiz_uuid2',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid6',
        question_text: 'What is the use of React Hooks?',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid2',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid7',
        question_text: 'Explain the concept of RESTful APIs.',
        question_type: 'open_ended',
        quiz_id: 'quiz_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid8',
        question_text: 'What is middleware in Express.js?',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid9',
        question_text: 'How does PostgreSQL handle relational data?',
        question_type: 'open_ended',
        quiz_id: 'quiz_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'question_uuid10',
        question_text: 'Explain the importance of indexing in databases.',
        question_type: 'multiple_choice',
        quiz_id: 'quiz_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Questions', null, {});
  }
};
