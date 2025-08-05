
//index.ts

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
import indexRoutes from "./routes/index"
app.use('/api',indexRoutes);

//mongo connection
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://typescript:type1112@cluster0.jkduqfu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    console.log(" MongoDB connected successfully");
  } catch (error) {

    console.error("MongoDB connection failed:", error);
    
  }
};

connectDB();


const PORT= 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));