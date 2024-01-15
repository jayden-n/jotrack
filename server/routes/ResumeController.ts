import express, {Request, Response, Router} from "express";

const route: Router = express.Router();

// todo: finish
// upload resume

// Example:
//
// uploading a file called resume.docx
// field name should be 'resume': <input name="resume" type="file" />
// in express server request, file can be accessed from req.files.resume:
route.post("/upload", async (request: Request, response: Response): Promise<void> => {
    console.log(request.files.resume);
});