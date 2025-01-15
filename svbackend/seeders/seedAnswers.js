'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Answers', [
      {
        id: 'answer_uuid1',
        answer_text: 'HyperText Markup Language',
        is_correct: true,
        question_id: 'question_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid2',
        answer_text: 'Cascading Style Sheets',
        is_correct: false,
        question_id: 'question_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid3',
        answer_text: 'Helix Transfer Language',
        is_correct: false,
        question_id: 'question_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid4',
        answer_text: 'A way to structure content on the web',
        is_correct: true,
        question_id: 'question_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid5',
        answer_text: 'A programming language',
        is_correct: false,
        question_id: 'question_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid6',
        answer_text: 'JavaScript variable declaration types',
        is_correct: true,
        question_id: 'question_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid7',
        answer_text: 'CSS selectors',
        is_correct: false,
        question_id: 'question_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid8',
        answer_text: 'A reusable piece of UI in React',
        is_correct: true,
        question_id: 'question_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid9',
        answer_text: 'A server configuration',
        is_correct: false,
        question_id: 'question_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'answer_uuid10',
        answer_text: 'A relational database language',
        is_correct: false,
        question_id: 'question_uuid5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Answers', null, {});
  }
};
