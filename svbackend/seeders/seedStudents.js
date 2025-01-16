const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

const students = [
  {
    id: uuidv4(),
    user_id: uuidv4(),
    first_name: 'John',
    last_name: 'Doe',
    bio: 'A passionate learner.',
    date_of_birth: new Date('2000-05-15'),
    country: 'Ghana',
    registration_date: new Date(),
    last_login: new Date(),
    profile_picture: 'https://example.com/john.jpg',
    level: 'Beginner',
    is_active: true
  },
  {
    id: uuidv4(),
    user_id: uuidv4(),
    first_name: 'Jane',
    last_name: 'Smith',
    bio: 'Aspiring software developer.',
    date_of_birth: new Date('1998-11-20'),
    country: 'Nigeria',
    registration_date: new Date(),
    last_login: new Date(),
    profile_picture: 'https://example.com/jane.jpg',
    level: 'Intermediate',
    is_active: true
  },
  {
    id: uuidv4(),
    user_id: uuidv4(),
    first_name: 'Paul',
    last_name: 'Adams',
    bio: 'Web developer and design enthusiast.',
    date_of_birth: new Date('1995-02-10'),
    country: 'Kenya',
    registration_date: new Date(),
    last_login: new Date(),
    profile_picture: 'https://example.com/paul.jpg',
    level: 'Advanced',
    is_active: true
  }
];

module.exports = students;
