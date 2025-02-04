const express = require('express');
const { getCourses } = require('../api/courses/getCourses');
const { getCourseById } = require('../controllers/courses/getCourse');
const { createCourse } = require('../controllers/courses/createCourse');
const { updateCourse } = require('../controllers/courses/updateCourse');
const { deleteCourse } = require('../controllers/courses/deleteCourse');

const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;