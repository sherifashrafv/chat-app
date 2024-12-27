import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sherifaway:5RJ4WYENqD6m313J@cluster0.zlzfj.mongodb.net/chat_db?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
