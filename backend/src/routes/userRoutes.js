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

// const rateLimit = require('express-rate-limit');

// const loginLimiter = rateLimit({
//     windowMs: 15 * 60 * 1000, // 15 minutes
//     max: 5, // Limit each IP to 5 requests per `windowMs`
//     message: 'Too many attempts. Try again later.',
//   });


const router = express.Router();

// User authentication routes
router.post('/signup', registerUser);
router.post('/login', loginUser );

// User management routes
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', authenticateAdmin, getAllUsers); // Add route to get all users

module.exports = router;

