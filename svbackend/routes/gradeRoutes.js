const express = require('express');

const { 
    getLessonGrade,
    updateLessonGrade,
} = require('../controllers/grades/lessonGradeController');

const {
    getModuleGrade,
    updateModuleGrade,
} = require('../controllers/grades/moduleGradeController');

const {
    getCourseGrade,
    updateCourseGrade,
} = require('../controllers/grades/courseGradeController');

const { getAllGrades } = require('../controllers/grades/allGradesController');

const router = express.Router();

router.get('/course/:student_id/:course_id', getCourseGrade);
router.get('/lesson/:student_id/:lesson_id', getLessonGrade);
router.get('/module/:student_id/:module_id', getModuleGrade);
router.get('/', getAllGrades);

// GET http://localhost:3000/progress/course/{student_id}/{course_id}

// update route
router.put('/course/:student_id/:course_id', updateCourseGrade);
router.put('/lesson/:student_id/:lesson_id', updateLessonGrade);
router.put('/module/:student_id/:module_id', updateModuleGrade);

module.exports = router;