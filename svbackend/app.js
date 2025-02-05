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
const  gradeRoutes = require('./routes/gradeRoutes');
const { authenticateUser, authenticateAdmin } = require('./middleware/authMiddleware');

dotenv.config();
const allowedOrigins = ['https://yourfrontend.com'];

// middleware
app.use(bodyParser.json());
app.use(cors({  
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Access denied by CORS'));
        }
    }
}));

// API Base Routes
app.use('/', authenticateUser);
app.use('/users', authenticateUser, userRoutes);
app.use('/courses', authenticateUser, courseRoutes);
app.use('/students', authenticateUser, studentRoutes);
app.use('/grades', authenticateUser, gradeRoutes);
app.use('/progress', authenticateUser, progressRoutes);

// Error Handling
// app.use(notFoundHandler); // 404 handler
// app.use(errorHandler); // 500 handler

module.exports = app;