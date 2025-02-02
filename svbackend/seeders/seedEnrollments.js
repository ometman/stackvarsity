'use strict';

const { v4: uuidv4 } = require('uuid');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('enrollments', [
      {
        id: uuidv4(),
        enrollment_date: '2024-01-15',
        status: 'active',
        student_id: students.find(student => student.id === 'admin').id,
        course_id: users.find(user => user.role === 'admin').id,,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        enrollment_date: '2024-02-10',
        status: 'completed',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        enrollment_date: '2024-03-05',
        status: 'dropped',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(), 
        enrollment_date: '2024-04-20', 
        status: 'active', 
        student_id: 'student_uuid4', 
        course_id: 'course_uuid4', 
        createdAt: new Date(), 
        updatedAt: new Date(), 
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('enrollments', null, {});
  },
};