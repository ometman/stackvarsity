'use strict';

const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        const password = 'password123';
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const users = [
            {
                id: uuidv4(),
                username: 'student1',
                email: 'student1@example.com',
                password_hash: passwordHash,
                password_salt: salt,
                role: 'student',
                is_active: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: uuidv4(),
                username: 'student2',
                email: 'student2@example.com',
                password_hash: passwordHash,
                password_salt: salt,
                role: 'student',
                is_active: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: uuidv4(),
                username: 'student3',
                email: 'student3@example.com',
                password_hash: passwordHash,
                password_salt: salt,
                role: 'student',
                is_active: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: uuidv4(),
                username: 'admin1',
                email: 'admin1@example.com',
                password_hash: passwordHash,
                password_salt: salt,
                role: 'admin',
                is_active: true,
                created_at: new Date(),
                updated_at: new Date()
            },
            {
                id: uuidv4(),
                username: 'admin2',
                email: 'admin2@example.com',
                password_hash: passwordHash,
                password_salt: salt,
                role: 'admin',
                is_active: true,
                created_at: new Date(),
                updated_at: new Date()
            }
        ];

        await queryInterface.bulkInsert('users', users);
        console.log('✅ Users seeded successfully.');
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {});
        console.log('✅ Users deleted successfully.');
    }
};
