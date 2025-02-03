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
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'feedback_uuid2',
        rating: 4,
        comment: 'Great content, but could use more examples.',
        student_id: 'student_uuid2',
        course_id: 'course_uuid2',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'feedback_uuid3',
        rating: 3,
        comment: 'The course was okay but lacked depth in some topics.',
        student_id: 'student_uuid3',
        course_id: 'course_uuid3',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'feedback_uuid4',
        rating: 5,
        comment: 'Perfect course! Would highly recommend.',
        student_id: 'student_uuid4',
        course_id: 'course_uuid4',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      },
      {
        id: 'feedback_uuid5',
        rating: 4,
        comment: 'Very informative and well structured.',
        student_id: 'student_uuid5',
        course_id: 'course_uuid5',
        created_at: new Date(),
        updated_at: new Date(),
        deleted_at: null,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Feedbacks', null, {});
  }
};
