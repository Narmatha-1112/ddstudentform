"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentById = exports.createDetail = void 0;
const student_models_1 = __importDefault(require("../models/student.models"));
// POST /student/creates - Create a new student
const createDetail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fullName, emailAddress, parentGuardianName, age, studentId, dateOfBirth, gender, address, attendancePercentage, academyMark, } = req.body;
        const newStudent = new student_models_1.default({
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
        const savedStudent = yield newStudent.save();
        console.log("Success: Data stored");
        res.status(201).json(savedStudent);
    }
    catch (error) {
        console.error("Error: Data not stored", error);
        res.status(500).json({ error: "Failed to create student" });
    }
});
exports.createDetail = createDetail;
// GET /student/:studentId - Get student by ID
const getStudentById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = parseInt(req.params.studentId, 10);
        if (isNaN(studentId)) {
            return res.status(400).json({ error: "Invalid student ID" });
        }
        const student = yield student_models_1.default.findOne({ studentId });
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        res.status(200).json(student);
    }
    catch (error) {
        console.error("Error fetching student", error);
        res.status(500).json({ error: "Failed to fetch student details" });
    }
});
exports.getStudentById = getStudentById;
