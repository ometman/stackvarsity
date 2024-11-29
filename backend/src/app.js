const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API Base Routes
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);

// Error Handling
app.use(notFoundHandler); // 404 handler
app.use(errorHandler); // 500 handler


module.exports = app;
