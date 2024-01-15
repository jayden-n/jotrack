import express, {Request, Response, Router} from "express";

import UserModel from "../models/User.js";

import IUser from "../interface/user/IUser.js";
import IUserMethods from "../interface/user/IUserMethods.js";

const route: Router = express.Router();

route.get("/", async (request: Request, response: Response): Promise<void> => {
    const userList: {} = await UserModel.find({});
    response.status(200).send({...userList});
});

route.post("/", async (request: Request, response: Response): Promise<void> => {
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
        response.status(400).send({"message": "email duplicated"});
    }
});

route.put("/:eid", async (request: Request, response: Response): Promise<void> => {
    try {
        const user: IUser | null = await UserModel.findOneAndUpdate(
            {_id: request.params.eid},
            {
                ...request.body,
            },
            {new: true},
        );
        if (!user)
            response.status(404).send({});
        else
            response.status(200).send(user);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(400).send({});
    }
});

route.delete("/:eid", async (request: Request, response: Response): Promise<void> => {
    try {
        const user: IUser = await UserModel.findOneAndDelete(
            {_id: request.params.eid},
        )

        if (!user)
            response.status(404).send({});
        else
            response.status(204).send({});
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(400).send({});
    }
});

route.get("/:eid", async (request: Request, response: Response): Promise<any> => {
    try {
        const user: IUser = await UserModel.findById(request.params.eid);

        if (!user)
            response.status(404).send({})
        else
            response.status(200).send(user);
    } catch (error) {
        console.error(`[ERROR] ${error}`);
        response.status(400).send({});
    }
});

export default route;
