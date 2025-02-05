const pool = require('../../utils/dbPool');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM courses');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

