const pool = require('../../utils/dbPool');

// Create a new student
exports.createStudent = async (req, res) => {
  const { first_name, last_name, email, username, password, date_of_birth, country } = req.body; // Add other necessary fields
  try {
    const { rows } = await pool.query(
      'INSERT INTO students (first_name, last_name, email, username, password, date_of_birth, country) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [first_name, last_name, email, username, password, date_of_birth, country]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating student', error });
  }
};
