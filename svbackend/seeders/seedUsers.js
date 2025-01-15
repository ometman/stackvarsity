const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');
const { User } = require('../models');

const seedUsers = async () => {
    const password = 'password123';
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);

    const users = [
        {
            id: uuidv4(),
            username: 'student1',
            first_name: 'John',
            last_name: 'Doe',
            email: 'student1@example.com',
            password_hash: passwordHash,
            password_salt: salt,
            role: 'Student',
            is_active: true
        },
        {
            id: uuidv4(),
            username: 'student2',
            first_name: 'Jane',
            last_name: 'Smith',
            email: 'student2@example.com',
            password_hash: passwordHash,
            password_salt: salt,
            role: 'Student',
            is_active: true
        },
        {
            id: uuidv4(),
            username: 'student3',
            first_name: 'Emily',
            last_name: 'Johnson',
            email: 'student3@example.com',
            password_hash: passwordHash,
            password_salt: salt,
            role: 'Student',
            is_active: true
        },
        {
            id: uuidv4(),
            username: 'admin1',
            first_name: 'Alice',
            last_name: 'Brown',
            email: 'admin1@example.com',
            password_hash: passwordHash,
            password_salt: salt,
            role: 'Super Admin',
            is_active: true
        },
        {
            id: uuidv4(),
            username: 'admin2',
            first_name: 'Bob',
            last_name: 'White',
            email: 'admin2@example.com',
            password_hash: passwordHash,
            password_salt: salt,
            role: 'Instructor',
            is_active: true
        }
    ];

    await User.bulkCreate(users);
    console.log('Users seeded successfully.');
};

module.exports = seedUsers;
