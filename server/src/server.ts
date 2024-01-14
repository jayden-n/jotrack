import express, { Request, Response, Application } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from '../routes/user.js';
// app config
const serverPort: number = 8000;
const application: Application = express();
application.use(express.json());
application.use(express.urlencoded({ extended: true }));
dotenv.config();
// routes
application.use("/api/users", userRoutes);
// db
const uri = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}:27017/`;
mongoose
  .connect(uri)
  .then(() => {
    console.log("[LOG] Connected to MongoDB");
  })
  .catch((error) => {
    console.error(`[ERROR] ${error}`);
    process.exit();
  });

application.get("/", (request: Request, response: Response): void => {
  response.send("hello world");
});

//  ================== "NOT FOUND" MIDDLEWARE  ==================
application.use("*", (request: Request, response: Response): void => {
  response.status(404).json({ msg: "not found" });
});

application.listen(serverPort, () => {
  console.log(`server is running at port ${serverPort}`);
});
