import { Schema, model, connect } from "mongoose";

import IUser from "../interface/IUser";

const userSchema: Schema = new Schema<IUser>({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
		minLength: 8,
		maxLength: 25,
	},
	bio: {
		type: String,
	},
});

const User = model<IUser>("User", userSchema);

export default User;
