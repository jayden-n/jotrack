import { createJob, getAllJobs } from "./../controllers/jobController.js";
import { Router } from "express";
import express from "express";

const router: Router = express.Router();

router.route("/").get(getAllJobs).post(createJob);

export default router;
