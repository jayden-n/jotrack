import {model, Schema} from "mongoose";
import bcrypt from "bcrypt";

import IUser from "../interface/IUser.js";

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
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    bio: {
        type: String,
    },
});

userSchema.pre('save', async function (this: IUser, next): Promise<void> {
    if (!this.isModified('password'))
        return next();

    try {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    } catch (error) {
        console.error(`[ERROR] ${error}`)
        return next(error);
    }
});

userSchema.pre('findOneAndUpdate', async function (this: { _update: IUser }, next): Promise<void> {
    if (!this._update || !this._update.password)
        return next();

    try {
        this._update.password = await bcrypt.hash(this._update.password, 10);
        next();
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        return next(error);
    }
});

const User = model<IUser>("User", userSchema);

export default User;
