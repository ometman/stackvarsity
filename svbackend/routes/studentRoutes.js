const express = require('express');
const { getStudents } = require('../controllers/students/getStudents');
const { 
    getStudentById, 
    getStudentByUsername 
} = require('../controllers/students/getStudent');
const { createStudent } = require('../controllers/students/createStudent');
const { updateStudent } = require('../controllers/students/updateStudent');
const { deleteStudent } = require('../controllers/students/deleteStudent');

const router = express.Router();

router.get('/',   getStudents);
router.get('/:id', getStudentById);
router.get('/:name', getStudentByUsername);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;

