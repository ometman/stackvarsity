const { v4: uuidv4 } = require('uuid');

const generateAdmins = async (users, admin_roles) => {
    return [
        {
            id: uuidv4(),
            first_name: 'John',
            last_name: 'Doe',
            role_id: admin_roles.find(role => role.role_name === 'Instructor').id,
            user_id: users.find(user => user.role === 'admin').id,
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            id: uuidv4(),
            first_name: 'Jane',
            last_name: 'Smith',
            role_id: admin_roles.find(role => role.role_name === 'Super Admin').id,
            user_id: users.find(user => user.role === 'admin').id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
    ];
};

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const users = await queryInterface.sequelize.query(
            `SELECT id, role FROM "users" WHERE role = 'admin';`,
            { type: Sequelize.QueryTypes.SELECT }
        );

        const admin_roles = await queryInterface.sequelize.query(
            `SELECT id, role_name FROM "admin_roles" WHERE role_name IN ('Instructor', 'Super Admin');`,
            { type: Sequelize.QueryTypes.SELECT }
        );

        const Admins = await generateAdmins(users, admin_roles);
        await queryInterface.bulkInsert('admins', Admins);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('admins', null, {});
    }
};
