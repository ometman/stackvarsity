'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Grades', [
      {
        id: 'grade_uuid1',
        grade: 'A',
        comments: 'Excellent performance throughout the course.',
        student_id: 'student_uuid1',
        course_id: 'course_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'grade_uuid2',
        grade: 'B+',
        comments: 'Good work, but could improve in quizzes.',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'grade_uuid3',
        grade: 'C',
        comments: 'Needs more focus on assignments.',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'grade_uuid4',
        grade: 'A-',
        comments: 'Very consistent and performed well in group projects.',
        student_id: 'student_uuid4',
        course_id: 'course_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'grade_uuid5',
        grade: 'B',
        comments: 'Good overall, but needs better participation in discussions.',
        student_id: 'student_uuid5',
        course_id: 'course_uuid5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Grades', null, {});
  }
};
