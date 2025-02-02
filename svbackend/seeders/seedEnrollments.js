'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Fetch multiple students and courses from the database
    const students = await queryInterface.sequelize.query(
      `SELECT id FROM students LIMIT 3;`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    const courses = await queryInterface.sequelize.query(
      `SELECT id FROM courses LIMIT 3;`,
      { type: Sequelize.QueryTypes.SELECT }
    );

    // Ensure we have enough students and courses
    if (students.length < 3 || courses.length < 3) {
      console.error("Not enough students or courses found. Seeder will not run.");
      return;
    }

    await queryInterface.bulkInsert('enrollments', [
      {
        id: uuidv4(),
        enrollment_date: '2024-01-15',
        status: 'enrolled',
        student_id: students[0].id,
        course_id: courses[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        enrollment_date: '2024-02-10',
        status: 'completed',
        student_id: students[1].id,
        course_id: courses[1].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuidv4(),
        enrollment_date: '2024-03-05',
        status: 'dropped',
        student_id: students[2].id,
        course_id: courses[2].id,
        created_at: new Date(),
        updated_at: new Date(),
      },
      // {
      //   id: uuidv4(),
      //   enrollment_date: '2024-04-20',
      //   status: 'active',
      //   student_id: students[3].id,
      //   course_id: courses[3].id,
      //   created_at: new Date(),
      //   updated_at: new Date(),
      // },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('enrollments', null, {});
  },
};
