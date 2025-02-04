const express = require('express');

const { 
    getLessonProgress,
    updateLessonProgress,
} = require('../controllers/progress/courseProgressController');

const {
    getModuleProgress,
    updateModuleProgress
} = require('../controllers/progress/moduleProgressController');

const {
    getCourseProgress,
    updateCourseProgress,
} = require('../controllers/progress/courseProgressController');

const router = express.Router();

router.get('/lesson/:student_id/:lesson_id', getLessonProgress);
router.get('/module/:student_id/:module_id', getModuleProgress);
router.get('/course/:student_id/:course_id', getCourseProgress);

// GET http://localhost:3000/progress/course/{student_id}/{course_id}

// update route
router.put('/course/:student_id/:course_id', updateCourseProgress);
router.put('/lesson/:student_id/:lesson_id', updateLessonProgress);
router.put('/module/:student_id/:module_id', updateModuleProgress);

module.exports = router;