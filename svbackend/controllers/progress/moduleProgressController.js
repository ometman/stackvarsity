const pool = require('../../utils/dbPool');

/**
 * Get module progress for a student
 * @param {Request} req
 * @param {Response} res
 */
 exports.getModuleProgress = async (req, res) => {
  try {
      const { student_id, module_id } = req.params;

      const query = `
          SELECT status, progress_percent 
          FROM module_progress 
          WHERE student_id = $1 AND module_id = $2;
      `;

      const { rows } = await pool.query(query, [student_id, module_id]);

      if (rows.length === 0) {
          return res.status(404).json({ message: 'Module progress not found for the student' });
      }

      res.status(200).json({ student_id, module_id, ...rows[0] });
  } catch (error) {
      console.error('Error fetching module progress:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateModuleProgress = async (req, res) => {
    try {
        const { student_id, module_id } = req.params;
        const { status, progress_percent } = req.body;

        const query = `
            UPDATE module_progress
            SET status = $1, progress_percent = $2, updated_at = NOW()
            WHERE student_id = $3 AND module_id = $4
            RETURNING *;
        `;

        const { rows } = await pool.query(query, [status, progress_percent, student_id, module_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Module progress not found for the student' });
        }

        res.status(200).json({ message: 'Module progress updated successfully', updatedProgress: rows[0] });
    } catch (error) {
        console.error('Error updating module progress:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
