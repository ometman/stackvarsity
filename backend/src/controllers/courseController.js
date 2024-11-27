const pool = require('../utils/db');

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    console.log("coursecontroller: getting courses")
    const { rows } = await pool.query('SELECT * FROM courses');
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching courses', error });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query('SELECT * FROM courses WHERE id = $1', [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching course', error });
  }
};

// Create a new course
exports.createCourse = async (req, res) => {
  const { title, description, category, level } = req.body;
  try {
    const { rows } = await pool.query(
      'INSERT INTO courses (title, description, category, level) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, category, level]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error creating course', error });
  }
};

// Update a course
exports.updateCourse = async (req, res) => {
  const { id } = req.params;
  const { title, description, category, level } = req.body;
  try {
    const { rows } = await pool.query(
      'UPDATE courses SET title = $1, description = $2, category = $3, level = $4 WHERE id = $5 RETURNING *',
      [title, description, category, level, id]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: 'Error updating course', error });
  }
};

// Delete a course
exports.deleteCourse = async (req, res) => {
  const { id } = req.params;
  try {
    const { rowCount } = await pool.query('DELETE FROM courses WHERE id = $1', [id]);
    if (rowCount === 0) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting course', error });
  }
};
