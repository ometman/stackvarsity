const express = require('express');

const { 
  getGrades,
  getGradesForStudent,
  updateGrade,
} = require('../controllers/gradeController');

const router = express.Router();

router.get('/', getGrades);
router.get('/:id', getGradesForStudent);
router.put('/:id', updateGrade);

module.exports = router;