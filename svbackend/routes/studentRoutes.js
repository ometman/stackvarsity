const express = require('express');
const { getStudents } = require('../api/students/getStudents');
const { getStudentById } = require('../api/students/getStudent');
const { createStudent } = require('../api/students/createStudent');
const { updateStudent } = require('../api/students/updateStudent');
const { deleteStudent } = require('../api/students/deleteStudent');

const router = express.Router();

router.get('/',   getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

