const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// Import routes
const  userRoutes = require('./routes/userRoutes');;
const  studentRoutes = require('./routes/studentRoutes');
const  courseRoutes = require('./routes/courseRoutes');
const  progressRoutes = require('./routes/progressRoutes')
const  gradeRoutes = require('./routes/gradeRoutes')

dotenv.config();

// middleware
// app.use(cors());
app.use(bodyParser.json());

// API Base Routes
app.use('/users', userRoutes);
app.use('/courses', courseRoutes);
app.use('/students', studentRoutes);
app.use('/grades', gradeRoutes);
app.use('/progress', progressRoutes);

// Error Handling
// app.use(notFoundHandler); // 404 handler
// app.use(errorHandler); // 500 handler

module.exports = app;