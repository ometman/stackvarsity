const bcrypt = require('bcrypt');
const pool = require('../utils/db');
const jwt = require('jsonwebtoken');

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