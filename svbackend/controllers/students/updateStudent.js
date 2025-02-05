const pool = require('../../utils/dbPool');

// Update a student
exports.updateStudent = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, username, password, date_of_birth, country } = req.body; // Add other necessary fields
    try {
      const { rows } = await pool.query(
        'UPDATE students SET first_name = $1, last_name = $2, email = $3, username = $4, password = $5, date_of_birth = $6, country = $7 WHERE id = $8 RETURNING *',
        [first_name, last_name, email, username, password, date_of_birth, country, id]
      );
      if (rows.length === 0) {
        return res.status(404).json({ message: 'Student not found' });
      }
      res.status(200).json(rows[0]);
    } catch (error) {
      res.status(500).json({ message: 'Error updating student', error });
    }
  };