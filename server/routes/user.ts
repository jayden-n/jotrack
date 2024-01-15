import express, {Request, Response, Router} from "express";

import UserModel from "../models/User.js";

import IUser from "../interface/IUser.js";
import IUserMethods from "../interface/IUserMethods.js";

const router: Router = express.Router();

router.get("/", async (request: Request, response: Response): Promise<void> => {
    const userList: {} = await UserModel.find({});
    response.status(200).send({...userList});
});

router.post("/", async (request: Request, response: Response): Promise<void> => {
    try {
        const user: IUser & IUserMethods = new UserModel({
            ...request.body,
        });

        await user.save();
        response.status(201).send({
            user,
        });
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(401);
    }
});

router.put("/:eid", async (request: Request, response: Response): Promise<void> => {
    try {
        const user: IUser | null = await UserModel.findOneAndUpdate(
            {_id: request.params.eid},
            {
                ...request.body,
            },
            {new: true},
        );
        if (!user) response.status(401);
        response.status(200).send(user);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(401);
    }
});

router.delete("/:eid", (request: Request, response: Response) => {
});

export default router;
