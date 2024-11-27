const express = require('express');
const {
  registerUser,
  loginUser,
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
} = require('../controllers/authController');
const authenticateAdmin = require('../middleware/authMiddleware')


const router = express.Router();

// User authentication routes
router.post('/signup', registerUser);
router.post('/login', loginUser);

// User management routes
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', authenticateAdmin, getAllUsers); // Add route to get all users

module.exports = router;

