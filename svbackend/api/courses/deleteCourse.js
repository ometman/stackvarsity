const pool = require('../utils/db');

// Delete a course
exports.deleteCourse = async (req, res) => {
    const { id } = req.params;
    try {
      const { rowCount } = await pool.query('DELETE FROM courses WHERE id = $1', [id]);
      if (rowCount === 0) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting course', error });
    }
  };