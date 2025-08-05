import { Request, Response } from 'express';
import StudentModel from '../models/student.models';

// POST /student/creates - Create a new student
export const createDetail = async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      emailAddress,
      parentGuardianName,
      age,
      studentId,
      dateOfBirth,
      gender,
      address,
      attendancePercentage,
      academyMark,
    } = req.body;

    const newStudent = new StudentModel({
      fullName,
      emailAddress,
      parentGuardianName,
      age,
      studentId,
      dateOfBirth,
      gender,
      address,
      attendancePercentage,
      academyMark,
    });

    const savedStudent = await newStudent.save();
    console.log("Success: Data stored");
    res.status(201).json(savedStudent);
  } catch (error) {
    console.error("Error: Data not stored", error);
    res.status(500).json({ error: "Failed to create student" });
  }
};

// GET /student/:studentId - Get student by ID
export const getStudentById = async (req: Request, res: Response) => {
  try {
    const studentId = parseInt(req.params.studentId, 10);
    if (isNaN(studentId)) {
      return res.status(400).json({ error: "Invalid student ID" });
    }

    const student = await StudentModel.findOne({ studentId });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error("Error fetching student", error);
    res.status(500).json({ error: "Failed to fetch student details" });
  }
};
