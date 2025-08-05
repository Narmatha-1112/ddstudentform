"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const student_controllers_1 = require("../contollers/student.controllers");
const router = express_1.default.Router();
// Route to create a new student
router.post('/creates', student_controllers_1.createDetail);
// Route to get student by studentId (e.g., /api/student/1234)
router.get('/:studentId', student_controllers_1.getStudentById);
exports.default = router;
