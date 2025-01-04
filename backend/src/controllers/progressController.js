const pool = require('../utils/db');

// Controllers for Progress
exports.getProgress = async (req, res) => {
    try {
      const result = await pool.query(
        `SELECT enrollments.id AS enrollment_id, students.first_name, students.last_name, courses.title AS course_title, enrollments.progress
         FROM enrollments
         INNER JOIN students ON enrollments.student_id = students.id
         INNER JOIN courses ON enrollments.course_id = courses.id`
      );
      res.status(200).json(result.rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getProgressForStudent = async (req, res) => {
    const { id } = req.params; // Passed user id parameter

    if (!id) {
        return res.status(400).json({ error: "Student ID is required" });
    }

    try {
        const result = await pool.query(
            `SELECT enrollments.id AS enrollment_id, 
                    courses.title AS course_title, 
                    enrollments.progress,
                    enrollments.status
             FROM enrollments
             INNER JOIN students ON enrollments.student_id = students.id
             INNER JOIN courses ON enrollments.course_id = courses.id
             WHERE enrollments.student_id = $1`, 
            [id] // Pass the user ID as a parameter
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "No progress data found for this student" });
        }

        res.status(200).json(result.rows);
    } catch (error) {
        console.error("Error fetching progress data:", error);
        res.status(500).json({ error: "An error occurred while fetching progress data." });
    }
};

  
  exports.updateProgress = async (req, res) => {
    const { enrollmentId } = req.params;
    const { progress } = req.body;
  
    try {
      const result = await pool.query(
        `UPDATE enrollments SET progress = $1 WHERE id = $2 RETURNING *`,
        [progress, enrollmentId]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // module.exports = { getProgress, updateProgress };
