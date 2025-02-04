const express = require('express');
const { getStudents, getStudentById } = require('../controllers/students/getStudents');
const { createStudent } = require('../controllers/students/createStudent');
const { updateStudent } = require('../controllers/students/updateStudent');
const { deleteStudent } = require('../controllers/students/deleteStudent');

const router = express.Router();

router.get('/',   getStudents);
router.get('/:id', getStudentById);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

