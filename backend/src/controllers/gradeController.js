const pool = require('../utils/db');

// Controllers for Grades
exports.getGrades = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT enrollments.id AS enrollment_id, 
      students.first_name,
      students.last_name,
      courses.title AS course_title, enrollments.grade
       FROM enrollments
       INNER JOIN students ON enrollments.student_id = students.id
       INNER JOIN courses ON enrollments.course_id = courses.id`
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getGradesForStudent = async (req, res) => {
const { studentId } = req.params; // Passed user id parameter

  try {
    const result = await pool.query(
      `SELECT grades.id AS grade_id, 
              courses.title AS course_title, 
              grades.grade,
              grades.comments
       FROM grades
       INNER JOIN courses ON grades.course_id = courses.id
       WHERE grades.student_id = $1`, // Filter by the specific user ID
      [studentId] // Pass the user ID as a parameter
    );
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.updateGrade = async (req, res) => {
  const { enrollmentId } = req.params;
  const { grade } = req.body;

  try {
    const result = await pool.query(
      `UPDATE enrollments SET grade = $1 WHERE id = $2 RETURNING *`,
      [grade, enrollmentId]
    );
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};