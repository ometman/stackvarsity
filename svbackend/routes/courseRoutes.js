const express = require('express');
const { getCourses } = require('../api/courses/getCourses');
const { getCourseById } = require('../api/courses/getCourse');
const { createCourse } = require('../api/courses/createCourse');
const { updateCourse } = require('../api/courses/updateCourse');
const { deleteCourse } = require('../api/courses/deleteCourse');


const router = express.Router();

router.get('/', getCourses);
router.get('/:id', getCourseById);
router.post('/', createCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

module.exports = router;