import express from 'express';
import {
  createDetail,
  getStudentById
} from '../contollers/student.controllers';

const router = express.Router();

// Route to create a new student
router.post('/creates', createDetail);

// Route to get student by studentId (e.g., /api/student/1234)
router.get('/:studentId', getStudentById);

export default router;
