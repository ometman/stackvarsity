const { Pool } = require('pg');
const bcrypt = require('bcrypt');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Simple test connection

const dbconnect = async () => {
  try {
    await pool.query('SELECT NOW()');
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection error:', err.message);
  }
};

dbconnect();

// Update the password in database with hashed one

// const updatePassword = async (userId, newPassword) => {
//   try {
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     console.log('Updating password for user ID:', userId);
//     console.log('New hashed password:', hashedPassword);

//     await pool.query(
//       'UPDATE users SET password = $1 WHERE id = $2',
//       [hashedPassword, userId]
//     );
//     console.log('Password updated successfully');
//   } catch (err) {
//     console.error('Error updating password:', err);
//   }
// };

// console.log('Database password:', process.env.DB_PASSWORD);
// updatePassword(1, 'testpassword');





// const crypto = require("crypto");
// const secretKey = crypto.randomBytes(64).toString("hex");
// console.log(secretKey);







