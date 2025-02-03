'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('answers', [
      {
        id: uuidv4(),
        answer_text: 'HyperText Markup Language',
        is_correct: true,
        question_id: '81a48eea-d171-4bed-b757-4d4424bb375e',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'Cascading Style Sheets',
        is_correct: false,
        question_id: '81a48eea-d171-4bed-b757-4d4424bb375e',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'Helix Transfer Language',
        is_correct: false,
        question_id: '81a48eea-d171-4bed-b757-4d4424bb375e',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'A way to structure content on the web',
        is_correct: true,
        question_id: '601a20d4-ac96-4366-adf4-331ed1b4dff6',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'A programming language',
        is_correct: false,
        question_id: '601a20d4-ac96-4366-adf4-331ed1b4dff6',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'JavaScript variable declaration types',
        is_correct: true,
        question_id: 'f40721c7-3837-4c31-861d-d0fd237e1524',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'CSS selectors',
        is_correct: false,
        question_id: 'f40721c7-3837-4c31-861d-d0fd237e1524',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'A reusable piece of UI in React',
        is_correct: true,
        question_id: 'a166807d-278c-4acf-a4af-cabc3d39c6d6',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'A server configuration',
        is_correct: false,
        question_id: 'a166807d-278c-4acf-a4af-cabc3d39c6d6',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        answer_text: 'A relational database language',
        is_correct: false,
        question_id: '1cb9ee6c-7f25-40fe-bbf4-629b1265c776',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('answers', null, {});
  }
};
