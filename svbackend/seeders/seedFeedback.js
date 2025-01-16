'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Feedbacks', [
      {
        id: 'feedback_uuid1',
        rating: 5,
        comment: 'Amazing course! Learned a lot and the instructor was very engaging.',
        student_id: 'student_uuid1',
        course_id: 'course_uuid1',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'feedback_uuid2',
        rating: 4,
        comment: 'Great content, but could use more examples.',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'feedback_uuid3',
        rating: 3,
        comment: 'The course was okay but lacked depth in some topics.',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'feedback_uuid4',
        rating: 5,
        comment: 'Perfect course! Would highly recommend.',
        student_id: 'student_uuid4',
        course_id: 'course_uuid4',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      },
      {
        id: 'feedback_uuid5',
        rating: 4,
        comment: 'Very informative and well structured.',
        student_id: 'student_uuid5',
        course_id: 'course_uuid5',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  }
};
