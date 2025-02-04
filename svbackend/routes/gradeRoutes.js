const express = require('express');

const { 
    getLessonGrade,
    getModuleGrade,
    getCourseGrade,
    getOverallGradeForStudent,
} = require('../controllers/grades/getGradesController');

const { 
    updateLessonGrade,
    updateModuleGrade,
    updateCourseGrade,
    updateOverallGradeForStudent,
} = require('../controllers/grades/updateGradesController');

const router = express.Router();

// get grades
router.get('/', getOverallGradeForStudent)
router.get('/:id', getLessonGrade);
router.get('/:id', getModuleGrade);
router.get('/:id', getCourseGrade);
router.get('/:id', getOverallGradeForStudent);

// update grades
router.put('/:id', updateLessonGrade);
router.put('/:id', updateModuleGrade);
router.put('/:id', updateCourseGrade);
router.put('/:id', updateOverallGradeForStudent);

module.exports = router;