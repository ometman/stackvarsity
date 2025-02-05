const pool = require('../../utils/dbPool');

/**
 * Get the course grade for a student
 * @param {Request} req
 * @param {Response} res
 */
exports.getCourseGrade = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;
        const query = 'SELECT grade FROM course_progress WHERE student_id = $1 AND course_id = $2';
        const { rows } = await pool.query(query, [student_id, course_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'No course grade found for the student' });
        }

        res.status(200).json({ course_id, student_id, grade: rows[0].grade });
    } catch (error) {
        console.error('Error fetching course grade:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};


 exports.updateCourseGrade = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;
        const { grade } = req.body;

        const query = `
            UPDATE course_progress 
            SET grade = $1, updated_at = NOW()
            WHERE student_id = $2 AND course_id = $3
            RETURNING grade;
        `;

        const { rows } = await pool.query(query, [grade, student_id, course_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Course progress not found for the student' });
        }

        res.status(200).json({ course_id, student_id, grade: rows[0].grade, message: 'Course grade updated successfully' });
    } catch (error) {
        console.error('Error updating course grade:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};