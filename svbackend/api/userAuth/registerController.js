const bcrypt = require('bcrypt');
const pool = require('../../utils/dbPool');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
  
        [email, hashedPassword]
      );
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.log("Error in Register user", error.message)
      res.status(500).json({ error: error.message });
    }
  };
  