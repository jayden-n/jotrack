import { Request, Response } from "express";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { IJobs } from "../interface/IJob.js";

// ================== GET ALL JOBS ==================
export const getAllJobs = async (
	req: Request,
	res: Response,
): Promise<void> => {
	const jobs: {} = await Job.find({});

	res.status(StatusCodes.OK).json({ jobs });
};

// ================== CREATE JOB ==================
export const createJob = async (req: Request, res: Response): Promise<void> => {
	const job: IJobs = await Job.create(req.body);

	res.status(StatusCodes.CREATED).json({ job });
};
