import {Document} from "mongoose";

// todo: finish
interface IResume extends Document {
    data: {
        name: string,
        data: {
            type: string,
            data: number[]
        },
        size: number,
        encoding: string,
        tempFilePath: string,
        truncated: boolean,
        mimetype: string,
        md5: string
    },
    userId: string,
}

export default IResume;