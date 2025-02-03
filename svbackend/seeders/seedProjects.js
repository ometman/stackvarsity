'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [
      {
        id: uuidv4(),
        title: 'Web Development Basics Project',
        description: 'A basic web development project focused on creating a personal portfolio site.',
        due_date: '2024-02-15',
        rubric: JSON.stringify({ criteria: ['Design', 'Functionality', 'Responsiveness'], max_score: 100 }),
        is_completed: true,
        completed_at: '2024-02-10',
        course_id: '54d555b8-4d7d-4c07-b35b-5d5a97c56e58',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Advanced React Application',
        description: 'An advanced project building a fully functional e-commerce platform using React and Firebase.',
        due_date: '2024-03-01',
        rubric: JSON.stringify({ criteria: ['State Management', 'Performance', 'UI Design'], max_score: 100 }),
        is_completed: true,
        completed_at: '2024-02-28',
        course_id: '8e31501c-5d18-43c1-9ef2-60d7b4c0e48d',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Backend API Development',
        description: 'Develop a RESTful API using Node.js, Express, and PostgreSQL.',
        due_date: '2024-03-10',
        rubric: JSON.stringify({ criteria: ['Code Structure', 'Database Design', 'Security'], max_score: 100 }),
        is_completed: false,
        completed_at: null,
        course_id: 'bb8fd8cc-a67d-4454-8b84-ec53d36c3cf5',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: uuidv4(),
        title: 'Full-Stack Capstone Project',
        description: 'A comprehensive project integrating front-end and back-end skills to build a social media platform.',
        due_date: '2024-04-01',
        rubric: JSON.stringify({ criteria: [
          'Full-Stack Integration', 'Performance', 'Security',
          'Design', 'Functionality', 'Responsiveness'
      ], max_score: 100 }),
        is_completed: false,
        completed_at: null,
        course_id: 'bc5bb33b-cef4-4190-9bb8-0216f663fb2e',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('projects', null, {});
  }
};
