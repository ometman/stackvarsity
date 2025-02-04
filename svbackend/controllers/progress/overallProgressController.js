const pool = require('../utils/db');

exports.getOverallProgress = async (req, res) => {
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

    