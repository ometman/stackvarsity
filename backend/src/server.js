const app = require('./app');
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// Testing REST API
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to STACKVARSITY: Your Web Development Learning Platform API',
    routes: {
      users: '/api/users',
      courses: '/api/courses',
    },
  });
});


// const bcrypt = require("bcrypt");

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

// updatePassword(1, 'testpassword');
