import {model, Schema} from "mongoose";

import IResume from "../interface/IResume.js";

// todo: finish
const resumeSchema: Schema = new Schema<IResume>({

    userId: {
        type: "string",
        required: true
    }
})

const Resume = model<IResume>("Resume", resumeSchema);

export default Resume;