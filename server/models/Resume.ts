import {model, Schema} from "mongoose";

import IResume from "../interface/resume/IResume.js";

const resumeSchema: Schema = new Schema<IResume>({

    userId: {
        type: "string",
        required: true
    }
})

const Resume = model<IResume>("Resume", resumeSchema);

export default Resume;