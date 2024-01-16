import {Document} from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
    address: {
        street: string,
        city: string,
        province: string,
        country: string
    }
    bio?: string;
    defaultResumeId: string;
}

export default IUser;
