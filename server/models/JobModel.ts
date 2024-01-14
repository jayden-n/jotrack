import mongoose, { Schema, Document } from "mongoose";
import { IJobs } from "../interface/IJob";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";

export interface IJobModel extends IJobs, Document {}

const JobSchema: Schema<IJobModel> = new mongoose.Schema({
	// NOTE: since i think the client-side's form submission will utilize the "required" attribute so there's no need to add for our models here...
	company: String,
	position: String,

	jobStatus: {
		type: String,
		enum: Object.values(JOB_STATUS) as string[],
		default: JOB_STATUS.PENDING as string,
	},
	jobType: {
		type: String,
		enum: Object.values(JOB_TYPE) as string[],
		default: JOB_TYPE.FULL_TIME as string,
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
