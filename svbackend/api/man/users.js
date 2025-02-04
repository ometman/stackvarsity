const bcrypt = require('bcrypt');
const pool = require('../utils/db');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const offset = (page - 1) * limit;
  
    try {
      const { rows } = await pool.query(
        'SELECT id, username, email, role, created_at FROM users LIMIT $1 OFFSET $2',
        [limit, offset]
      );
      res.status(200).json(rows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };