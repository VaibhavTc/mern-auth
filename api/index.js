import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const mongoURI = process.env.MONGODB_URI;
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
