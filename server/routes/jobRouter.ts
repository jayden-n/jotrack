import { createJob, deleteJob, getAllJobs, getSingleJob, updateJob } from "./../controllers/jobController.js";
import { Router } from "express";
import express from "express";

const router: Router = express.Router();

router.route("/").get(getAllJobs).post(createJob);

router
	.route("/:id")
    .get(getSingleJob)
    .patch(updateJob)
    .delete(deleteJob)

export default router;
