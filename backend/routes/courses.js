// routes/courses.js
import { express } from 'express';
const pool = require('../db');
const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses');
        res.json({ courses: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get course lessons
router.get('/:courseId/lessons', async (req, res) => {
    const { courseId } = req.params;
    try {
        const result = await pool.query('SELECT * FROM lessons WHERE course_id = $1 ORDER BY position', [courseId]);
        res.json({ lessons: result.rows });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
