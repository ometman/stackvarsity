'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Enrollments', [
      {
        id: 'enrollment_uuid1',
        enrollment_date: '2024-01-15',
        status: 'active',
        student_id: 'student_uuid1',
        course_id: 'course_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'enrollment_uuid2',
        enrollment_date: '2024-02-10',
        status: 'completed',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'enrollment_uuid3',
        enrollment_date: '2024-03-05',
        status: 'dropped',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 'enrollment_uuid4', 
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
    await queryInterface.bulkDelete('Enrollments', null, {});
  },
};