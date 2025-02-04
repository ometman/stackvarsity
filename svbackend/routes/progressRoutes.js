const express = require('express');

const { 
    getLessonProgress,
    getModuleProgress,
    getCourseProgress,
    getOverallProgressForStudent } = require('../controllers/progressController');
const {  
    updateLessonProgress,
    updateModuleProgress,
    updateCourseProgress
 } = require('../controllers/updateProgressController');

const router = express.Router();

router.get('/:id', getLessonProgress);
router.get('/:id', getModuleProgress);
router.get('/:id', getCourseProgress);
router.get('/:id', getOverallProgressForStudent);
router.put('/:id', updateLessonProgress);
router.put('/:id', updateLessonProgress);
router.put('/:id', updateModuleProgress);
router.put('/:id', updateCourseProgress)

module.exports = router;