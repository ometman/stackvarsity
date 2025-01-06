const express = require('express');
const {
  registerUser,
  loginUser,
} = require('../api/auth/userAuth');

const router = express.Router();

// User authentication routes
router.post('/signup', registerUser);
router.post('/login', loginUser );


module.exports = router;

