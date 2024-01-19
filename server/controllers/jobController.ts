import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import Job from "../models/JobModel.js";
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

// ================== GET SINGLE JOB ==================
export const getSingleJob = async (req: Request, res: Response): Promise<void> => {
	const job = await Job.findById(req.params.id);

	res.status(StatusCodes.OK).json({ job });
}

// ================== UPDATE JOB ==================
export const updateJob = async (req: Request, res: Response): Promise<void> => {

	const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
		// give you the object after update was applied.
		new: true,
	});
	res.status(StatusCodes.OK).json({ msg: "Job modified!", job: updatedJob });
}

// ================== DELETE JOB ==================
export const deleteJob = async (req: Request, res: Response): Promise<void> => {

	const deletedJob = await Job.findByIdAndDelete(req.params.id);

	res.status(StatusCodes.OK).json({ msg: "job deleted", job: deletedJob });
}