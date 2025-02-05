const pool = require('../../utils/dbPool');

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

