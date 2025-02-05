const express = require('express');
const { loginUser } = require('../api/userAuth/loginController');
const { registerUser } = require('../api/userAuth/registerController');

const {
  addUser,
  deleteUser,
  updateUser,
} = require('../api/userMan/userController');
const { getUsers } = require('../api/userMan/usersController');
const authenticateAdmin = require('../middleware/authMiddleware')

// call router
const router = express.Router();

// User authentication routes
router.post('/register', registerUser);
router.post('/login', loginUser );

// User management routes
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);
router.get('/', getUsers);
// authenticateAdmin
module.exports = router;

