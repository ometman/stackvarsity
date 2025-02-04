const pool = require('../utils/db');

exports.getOverallGradeForStudent = async (req, res) => {
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
    