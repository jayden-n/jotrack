import express, {Application, Request, Response} from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from 'express-fileupload';

import userRoutes from '../routes/UserController.js';
import jobRouter from "../routes/jobRouter.js";
// app config
const application: Application = express();
application.use(express.json());
application.use(express.urlencoded({extended: true}));
application.use(fileUpload());
dotenv.config();
// routes
application.use("/api/users", userRoutes);
application.use("api/v1/jobs", jobRouter);
// db
const uri: string = `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_NAME}:27017/`;
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
    response.status(200).send({user: "http://localhost:8080/api/users"});
});

//  ================== "NOT FOUND" MIDDLEWARE  ==================
application.use("*", (request: Request, response: Response): void => {
    response.status(404).send({});
});

application.listen(process.env.PORT, () => {
    console.log(`[LOG] Server is running at port ${process.env.PORT}`);
});
