import {Document} from "mongoose";

interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    bio?: string;
}

export default IUser;
