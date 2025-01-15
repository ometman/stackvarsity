'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Notifications', [
      {
        id: 'notification_uuid1',
        message: 'Great job on the project! Keep up the good work.',
        target_audience: 'student_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'notification_uuid2',
        message: 'Remember to review the last module before the quiz.',
        target_audience: 'student_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'notification_uuid3',
        message: 'Excellent participation in the group discussions.',
        target_audience: 'student_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'notification_uuid4',
        message: 'Consider submitting the project earlier for feedback.',
        target_audience: 'student_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'notification_uuid5',
        message: 'Great improvement shown in the last assignment.',
        target_audience: 'student_uuid5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Notifications', null, {});
  }
};
