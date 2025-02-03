const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('admin_roles', [
      {
        id: uuidv4(),
        role_name: 'Instructor',
        permissions: JSON.stringify(['create_course', 'manage_students']),
        description: 'Responsible for creating courses and managing students.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: uuidv4(),
        role_name: 'Super Admin',
        permissions: JSON.stringify(['create_admins', 'manage_platform']),
        description: 'Full access to the platform management.',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('admin_roles', null, {});
  }
};
