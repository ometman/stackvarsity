const pool = require('../utils/db');

/**
 * Get lesson progress for a student
 * @param {Request} req
 * @param {Response} res
 */
 exports.getLessonProgress = async (req, res) => {
  try {
      const { student_id, lesson_id } = req.params;

      const query = `
          SELECT status, progress_percent 
          FROM lesson_progress 
          WHERE student_id = $1 AND lesson_id = $2;
      `;

      const { rows } = await pool.query(query, [student_id, lesson_id]);

      if (rows.length === 0) {
          return res.status(404).json({ message: 'Lesson progress not found for the student' });
      }

      res.status(200).json({ student_id, lesson_id, ...rows[0] });
  } catch (error) {
      console.error('Error fetching lesson progress:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateLessonProgress = async (req, res) => {
    try {
        const { student_id, lesson_id } = req.params;
        const { status, progress_percent } = req.body;

        const query = `
            UPDATE lesson_progress
            SET status = $1, progress_percent = $2, updated_at = NOW()
            WHERE student_id = $3 AND lesson_id = $4
            RETURNING *;
        `;

        const { rows } = await pool.query(query, [status, progress_percent, student_id, lesson_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Lesson progress not found for the student' });
        }

        res.status(200).json({ message: 'Lesson progress updated successfully', updatedProgress: rows[0] });
    } catch (error) {
        console.error('Error updating lesson progress:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
