import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`MongoDB Connected:${conn.connection.host} `);
  } catch (e) {
    console.error("Error connecting to MongoDB:", e.message);
  }
};
