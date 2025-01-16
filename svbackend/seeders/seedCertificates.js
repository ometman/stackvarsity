'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Certificates', [
      {
        id: 'certificate_uuid1',
        student_id: 'student_uuid1', // Replace with actual student ID
        course_id: 'course_uuid1', // Replace with actual course ID
        issue_date: new Date(), // Or a specific date if needed
        certificate_url: 'https://www.example.com/certificate1.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'certificate_uuid2',
        student_id: 'student_uuid2', // Replace with actual student ID
        course_id: 'course_uuid2', // Replace with actual course ID
        issue_date: new Date(), // Or a specific date if needed
        certificate_url: 'https://www.example.com/certificate2.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'certificate_uuid3',
        student_id: 'student_uuid3', // Replace with actual student ID
        course_id: 'course_uuid3', // Replace with actual course ID
        issue_date: new Date(), // Or a specific date if needed
        certificate_url: 'https://www.example.com/certificate3.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'certificate_uuid4',
        student_id: 'student_uuid4', // Replace with actual student ID
        course_id: 'course_uuid4', // Replace with actual course ID
        issue_date: new Date(), // Or a specific date if needed
        certificate_url: 'https://www.example.com/certificate4.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 'certificate_uuid5',
        student_id: 'student_uuid5', // Replace with actual student ID
        course_id: 'course_uuid5', // Replace with actual course ID
        issue_date: new Date(), // Or a specific date if needed
        certificate_url: 'https://www.example.com/certificate5.pdf',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Certificates', null, {});
  },
};
