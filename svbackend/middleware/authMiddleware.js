const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const app_secret = process.env.JWT_SECRET;

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: 'Access denied' });

  jwt.verify(token, app_secret, (err, decoded) => {
      if (err) return res.status(401).json({ error: 'Invalid token' });

      req.user = decoded;
      next();
  });
};

const authenticateAdmin = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(403).json({ message: 'Access denied' });
  }

  try {
    const decoded = jwt.verify(token, app_secret);
    console.log(decoded);
    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
  authenticateUser, 
  authenticateAdmin
};