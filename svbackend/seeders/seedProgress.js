'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Progress', [
      {
        id: 'progress_uuid1',
        progress_percent: 25,
        completedAt: '2024-01-20',
        student_id: 'student_uuid1',
        course_id: 'course_uuid1',
        module_id: 'module_uuid1',
        lesson_id: 'lesson_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'progress_uuid2',
        progress_percent: 50,
        completedAt: '2024-01-25',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        module_id: 'module_uuid2',
        lesson_id: 'lesson_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'progress_uuid3',
        progress_percent: 75,
        completedAt: '2024-02-10',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        module_id: 'module_uuid3',
        lesson_id: 'lesson_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 'progress_uuid4',
        progress_percent: 100,
        completedAt: '2024-02-15',
        student_id: 'student_uuid4',
        course_id: 'course_uuid4',
        module_id: 'module_uuid4',
        lesson_id: 'lesson_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Progress', null, {});
  },
};
