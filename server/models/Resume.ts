import {model, Schema} from "mongoose";

import IResume from "../interface/IResume.js";

// todo: finish
const resumeSchema: Schema = new Schema<IResume>({
    data: {
        name: {
            type: String,
        },
        data: {
            type: {
                type: String,
            },
            data: {
                type: [Number]
            }
        },
        size: {
            type: Number
        },
        encoding: {
            type: String
        },
        tempFilePath: {
            type: String
        },
        truncated: {
            type: Boolean
        },
        mimetype: {
            type: String
        },
        md5: {
            type: String
        }
    },
    userId: {
        type: String,
        required: true
    }
})

const Resume = model<IResume>("Resume", resumeSchema);

export default Resume;