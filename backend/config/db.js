import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://PiyuAdav:Piyush1234@clustereatsnap.vi5sb.mongodb.net/?"
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};
