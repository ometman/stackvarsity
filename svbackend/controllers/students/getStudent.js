const pool = require('../../utils/dbPool');

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