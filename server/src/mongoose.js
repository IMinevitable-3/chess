import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: '../.env' });
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/chess")
  .then((res) => {
    console.log("DB Connected!");
  })
  .catch((err) => {
    console.log("Error while connecting to DB", err.message);
  });

const connectDatabase = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/chess"
    );

    console.log("connected to database");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDatabase();
