const { v4: uuidv4 } = require('uuid');

const generateStudents = async (users) => {
  return [
    {
      id: uuidv4(),
      user_id: users.find(
        user => user.role === 'student' && user.email === 'student1@example.com'
        ).id || null,
      first_name: 'Student',
      last_name: 'One',
      bio: 'A passionate learner.',
      date_of_birth: new Date('2000-05-15'),
      country: 'Ghana',
      registration_date: new Date(),
      last_login: new Date(),
      profile_picture: 'https://example.com/john.jpg',
      level: 'Beginner',
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date()
    },
    {
      id: uuidv4(),
      user_id: users.find(
        user => user.role === 'student' && user.email === 'student2@example.com'
        ).id || null,
      first_name: 'Student',
      last_name: 'Two',
      bio: 'Aspiring software developer.',
      date_of_birth: new Date('1998-11-20'),
      country: 'Nigeria',
      registration_date: new Date(),
      last_login: new Date(),
      profile_picture: 'https://example.com/jane.jpg',
      level: 'Intermediate',
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date()
    },
    {
      id: uuidv4(),
      user_id: users.find(
        user => user.role === 'student' && user.email === 'student3@example.com'
        ).id || null,
      first_name: 'Student',
      last_name: 'Three',
      bio: 'Web developer and design enthusiast.',
      date_of_birth: new Date('1995-02-10'),
      country: 'Kenya',
      registration_date: new Date(),
      last_login: new Date(),
      profile_picture: 'https://example.com/paul.jpg',
      level: 'Advanced',
      is_active: true,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: new Date()
    }
  ];
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
      const users = await queryInterface.sequelize.query(
          `SELECT id, role, email FROM "users" 
          WHERE 
            role = 'student' 
            AND email IN (
              'student1@example.com',
              'student2@example.com',
              'student3@example.com'
          );`,
          { type: Sequelize.QueryTypes.SELECT }
      );

      const Students = await generateStudents(users);
      await queryInterface.bulkInsert('students', Students);
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('students', null, {});
  }
};
