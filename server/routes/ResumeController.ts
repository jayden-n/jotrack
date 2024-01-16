import express, {Request, Response, Router} from "express";

const route: Router = express.Router();

// todo: finish
//  read docx file and map it to resumeModel
route.post("/", async (request: Request, response: Response): Promise<void> => {
    try {
        console.log(`[LOG] ${request.files.resume}`);
        response.status(201).send(request.files.resume);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(400).send({});
    }
});

export default route;