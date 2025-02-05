const pool = require('../../utils/dbPool');

// Update a course
exports.updateCourse = async (req, res) => {
    const { id } = req.params;
    const { title, description, category, level } = req.body;
    try {
      const { rows } = await pool.query(
        'UPDATE courses SET title = $1, description = $2, category = $3, level = $4 WHERE id = $5 RETURNING *',
        [title, description, category, level, id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Course not found' });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error updating course', error });
    }
  };