const bcrypt = require('bcrypt');
const pool = require('../utils/db');
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