const pool = require('../utils/db');

/**
 * Get the lesson grade for a student
 * @param {Request} req
 * @param {Response} res
 */
 exports.getLessonGrade = async (req, res) => {
  try {
      const { student_id, lesson_id } = req.params;
      const query = 'SELECT grade FROM lesson_progress WHERE student_id = $1 AND lesson_id = $2';
      const { rows } = await pool.query(query, [student_id, lesson_id]);

      if (rows.length === 0) {
          return res.status(404).json({ message: 'No lesson grade found for the student' });
      }

      res.status(200).json({ lesson_id, student_id, grade: rows[0].grade });
  } catch (error) {
      console.error('Error fetching lesson grade:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateLessonGrade = async (req, res) => {
    try {
        const { student_id, lesson_id } = req.params;
        const { grade } = req.body;

        const query = `
            UPDATE lesson_progress 
            SET grade = $1, updated_at = NOW()
            WHERE student_id = $2 AND lesson_id = $3
            RETURNING grade;
        `;

        const { rows } = await pool.query(query, [grade, student_id, lesson_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Lesson progress not found for the student' });
        }

        res.status(200).json({ lesson_id, student_id, grade: rows[0].grade, message: 'Lesson grade updated successfully' });
    } catch (error) {
        console.error('Error updating lesson grade:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
