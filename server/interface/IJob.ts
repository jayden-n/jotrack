import { ObjectId } from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

export interface IJobs {
	company: String;
	position: String;

	jobStatus?: keyof typeof JOB_STATUS;
	jobType?: keyof typeof JOB_TYPE;

	jobLocation: String;

	createdBy: ObjectId;
}
