const pool = require('../utils/db');

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