import express, { Router, Request, Response } from "express";
import bcrypt from "bcrypt";

import UserModel from "../models/User";

const routes: Router = express.Router();

routes.post("/", async (request: Request, response: Response) => {
    const newUser = new UserModel({
      ...request.body
    });

    await newUser.save();
    response.status(201).send({
      newUser,
    });
});
