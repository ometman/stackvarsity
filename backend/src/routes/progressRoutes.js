const express = require('express');

const {
    getProgress,
    getProgressForStudent,
    updateProgress,
} = require('../controllers/progressController');

const router = express.Router();

router.get('/', getProgress);
router.get('/:id', getProgressForStudent)
router.put('/:id', updateProgress)

module.exports = router;