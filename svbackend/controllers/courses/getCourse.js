const pool = require('../../utils/dbPool');

// Get a single course by ID
exports.getCourseById = async (req, res) => {
    const { id } = req.params;
    try {
      const { rows } = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching course', error });
    }
  };