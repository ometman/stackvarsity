const pool = require('../../utils/dbPool');

// Get all students
exports.getStudents = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM students');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching students', error });
  }
};








