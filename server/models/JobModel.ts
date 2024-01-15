import mongoose, { Schema, Document } from "mongoose";
import { IJobs } from "../interface/IJob.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

export interface IJobModel extends IJobs, Document {}

const JobSchema: Schema<IJobModel> = new mongoose.Schema({
	company: String,
	position: String,

	// todo: fixme: 2 fields give error
	jobStatus: {
		type: String,
		enum: Object.values(JOB_STATUS) as string[],
		default: JOB_STATUS.PENDING as "PENDING",
	},
	jobType: {
		type: String,
		enum: Object.values(JOB_TYPE) as string[],
		default: JOB_TYPE.FULL_TIME as "FULL_TIME",
	},
	jobLocation: {
		type: String,
		default: "earth",
	},

	// NOTE: will be tied to corresponding user
	createdBy: {
		type: mongoose.Types.ObjectId,
		ref: "User",
	},
});

export default mongoose.model<IJobModel>("Job", JobSchema);
