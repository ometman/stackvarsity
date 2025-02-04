const pool = require('../utils/db');

/**
 * Get the module grade for a student
 * @param {Request} req
 * @param {Response} res
 */
 exports.getModuleGrade = async (req, res) => {
  try {
      const { student_id, module_id } = req.params;
      const query = 'SELECT grade FROM module_progress WHERE student_id = $1 AND module_id = $2';
      const { rows } = await pool.query(query, [student_id, module_id]);

      if (rows.length === 0) {
          return res.status(404).json({ message: 'No module grade found for the student' });
      }

      res.status(200).json({ module_id, student_id, grade: rows[0].grade });
  } catch (error) {
      console.error('Error fetching module grade:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

const updateModuleGrade = async (req, res) => {
    try {
        const { student_id, module_id } = req.params;
        const { grade } = req.body;

        const query = `
            UPDATE module_progress 
            SET grade = $1, updated_at = NOW()
            WHERE student_id = $2 AND module_id = $3
            RETURNING grade;
        `;

        const { rows } = await pool.query(query, [grade, student_id, module_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Module progress not found for the student' });
        }

        res.status(200).json({ module_id, student_id, grade: rows[0].grade, message: 'Module grade updated successfully' });
    } catch (error) {
        console.error('Error updating module grade:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
