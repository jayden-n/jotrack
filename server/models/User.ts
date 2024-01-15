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
    bio: {
        type: String,
    },
});

userSchema.pre('save', async function (this: IUser, next): Promise<void> {
    if (!this.isModified('password')) {
        return next();
    }

    try {
        const hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }
});

const User = model<IUser>("User", userSchema);

export default User;
