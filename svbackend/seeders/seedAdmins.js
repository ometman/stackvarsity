const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');

const admins = [
  {
    id: uuidv4(),
    first_name: 'John',
    last_name: 'Doe',
    password_salt: bcrypt.genSaltSync(10),
    password_hash: bcrypt.hashSync('password123', bcrypt.genSaltSync(10))
  },
  {
    id: uuidv4(),
    first_name: 'Jane',
    last_name: 'Smith',
    password_salt: bcrypt.genSaltSync(10),
    password_hash: bcrypt.hashSync('password123', bcrypt.genSaltSync(10))
  }
];

module.exports = admins;
