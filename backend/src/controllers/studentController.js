const pool = require('../utils/db');

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM students');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};

// Get a single student by ID
exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM students WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching student', error });
  }
};

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

// Update a student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, email, username, password, date_of_birth, country } = req.body; // Add other necessary fields
  try {
    const { rows } = await pool.query(
      'UPDATE students SET first_name = $1, last_name = $2, email = $3, username = $4, password = $5, date_of_birth = $6, country = $7 WHERE id = $8 RETURNING *',
      [first_name, last_name, email, username, password, date_of_birth, country, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating student', error });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query('DELETE FROM students WHERE id = $1', [id]);
    if (rowCount === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting student', error });
  }
};

exports.getStudentByUsername = async (username) => {
  try {
    const { rows } = await pool.query('SELECT * FROM students WHERE username = $1', [username]);
    if (rows.length === 0) {
      return null; // Or throw an error if you prefer
    }
    return rows[0];
  } catch (error) {
    console.error('Error fetching student by username:', error);
    throw error; 
  }
};