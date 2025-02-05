// controllers add, del and update

const bcrypt = require('bcrypt');
const pool = require('../../utils/dbPool');
const jwt = require('jsonwebtoken');

// Add a new user
exports.addUser = async (req, res) => {
    const { username, email, password, role } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
        [username, email, hashedPassword, role]
      );
      res.status(201).json({ message: 'User added successfully', user: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
      if (result.rowCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully', user: result.rows[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Update a user by ID
exports.updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email, password, role } = req.body;

  try {
    let hashedPassword = undefined;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }

    const query = `
      UPDATE users 
      SET 
        username = COALESCE($1, username), 
        email = COALESCE($2, email), 
        password = COALESCE($3, password), 
        role = COALESCE($4, role)
      WHERE id = $5 
      RETURNING *
    `;
    const values = [username, email, hashedPassword, role, id];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};