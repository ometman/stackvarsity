'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('projects', [
      {
        id: 'project_uuid1',
        title: 'Web Development Basics Project',
        description: 'A basic web development project focused on creating a personal portfolio site.',
        due_date: '2024-02-15',
        rubric: JSON.stringify({ criteria: ['Design', 'Functionality', 'Responsiveness'], max_score: 100 }),
        is_completed: true,
        completed_at: '2024-02-10',
        module_id: 'module_uuid1',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'project_uuid2',
        title: 'Advanced React Application',
        description: 'An advanced project building a fully functional e-commerce platform using React and Firebase.',
        due_date: '2024-03-01',
        rubric: JSON.stringify({ criteria: ['State Management', 'Performance', 'UI Design'], max_score: 100 }),
        is_completed: true,
        completed_at: '2024-02-28',
        module_id: 'module_uuid2',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'project_uuid3',
        title: 'Backend API Development',
        description: 'Develop a RESTful API using Node.js, Express, and PostgreSQL.',
        due_date: '2024-03-10',
        rubric: JSON.stringify({ criteria: ['Code Structure', 'Database Design', 'Security'], max_score: 100 }),
        is_completed: false,
        completed_at: null,
        module_id: 'module_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'project_uuid4',
        title: 'Full-Stack Capstone Project',
        description: 'A comprehensive project integrating front-end and back-end skills to build a social media platform.',
        due_date: '2024-04-01',
        rubric: JSON.stringify({ criteria: [
          'Full-Stack Integration', 'Performance', 'Security',
          'Design', 'Functionality', 'Responsiveness'
      ], max_score: 100 }),
        is_completed: false,
        completed_at: null,
        module_id: 'module_uuid4',
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
