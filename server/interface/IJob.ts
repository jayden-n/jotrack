import { ObjectId } from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.ts";

export interface IJobs {
	company: String;
	position: String;

	// since we only have 3 job status
	// => client-side will render a list of options (object)
	jobStatus?: keyof typeof JOB_STATUS;
	jobType?: keyof typeof JOB_TYPE;

	jobLocation: String;

	// NOTE: will be tied to corresponding user
	createdBy: ObjectId;
}
