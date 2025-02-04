const pool = require('../utils/db');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    console.log("coursecontroller: getting courses")
    const { rows } = await pool.query('SELECT * FROM courses');
    console.log(rows)
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

