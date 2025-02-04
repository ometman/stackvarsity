const pool = require('../utils/db');

/**
 * Get course progress for a student
 * @param {Request} req
 * @param {Response} res
 */
exports.getCourseProgress = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;

        const query = `
            SELECT status, progress_percent 
            FROM course_progress 
            WHERE student_id = $1 AND course_id = $2;
        `;

        const { rows } = await pool.query(query, [student_id, course_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Course progress not found for the student' });
        }

        res.status(200).json({ student_id, course_id, ...rows[0] });
    } catch (error) {
        console.error('Error fetching course progress:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

exports.updateCourseProgress = async (req, res) => {
    try {
        const { student_id, course_id } = req.params;
        const { status, progress_percent } = req.body;

        const query = `
            UPDATE course_progress
            SET status = $1, progress_percent = $2, updated_at = NOW()
            WHERE student_id = $3 AND course_id = $4
            RETURNING *;
        `;

        const { rows } = await pool.query(query, [status, progress_percent, student_id, course_id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Course progress not found for the student' });
        }

        res.status(200).json({ message: 'Course progress updated successfully', updatedProgress: rows[0] });
    } catch (error) {
        console.error('Error updating course progress:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
