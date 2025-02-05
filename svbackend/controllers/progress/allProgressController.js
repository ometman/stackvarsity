const pool = require('../../utils/dbPool');

exports.getAllProgress = async (req, res) => {
    try {
        const query = `
            SELECT id, student_id, course_id, status, progress_percent 
            FROM course_progress
        `;
        const { rows } = await pool.query(query);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Course progress not found for the student' });
        }
        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching course progress:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

    