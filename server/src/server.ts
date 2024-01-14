import express from "express";
import { Request, Response, Application } from "express";
import dotenv from "dotenv";

// ================== ROUTER IMPORTS ==================
import jobRouter from "../routes/jobRouter.js";

const serverPort: number = 8000;
dotenv.config();

const app: Application = express();

app.get("/", (request: Request, response: Response): void => {
	response.send("hello world");
});

// ================== BASE URL ==================
app.use("api/v1/jobs", jobRouter);

//  ================== "NOT FOUND" MIDDLEWARE  ==================
app.use("*", (request: Request, response: Response): void => {
	response.status(404).json({ msg: "not found" });
});

app.listen(serverPort, () => {
	console.log(`server is running at port ${serverPort}`);
});
