
//student modules
import mongoose, { Document, Schema } from 'mongoose';

// Define a TypeScript interface for the Student document
export interface IStudent extends Document {

  fullName: string;
  emailAddress: string;
  parentGuardianName: string;
  age: number;
  studentId: number;
  dateOfBirth: Date;
  gender: string;
  address: string;
  attendancePercentage: number;
  academyMark: number;
  
}
// Create the Mongoose schema
const studentSchema: Schema = new Schema({
  
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true, unique: true, lowercase: true, trim: true },
  parentGuardianName: { type: String, required: true },
  age: { type: Number, required: true },
  studentId: { type: Number, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  address: { type: String, required: true },
  attendancePercentage: { type: Number, required: true },
  academyMark: { type: Number, required: true },
});

// Export the model
export default mongoose.model<IStudent>('Student', studentSchema);