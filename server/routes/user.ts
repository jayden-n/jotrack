import express, { Router, Request, Response } from "express";
import bcrypt from "bcrypt";

import UserModel from '../models/User.js'

import IUser from "../interface/IUser.js";
import IUserMethods from "../interface/IUserMethods.js";

const router: Router = express.Router();

router.get("/", async (request: Request, response: Response) => {
  const userList: {} = await UserModel.find({});
  response.status(200).send({ ...userList });
});

router.post("/", async (request: Request, response: Response) => {
  try {
    const hashedPassword: string = await bcrypt.hash(request.body.password, 10);
    request.body.password = hashedPassword;

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

router.put("/:eid", async (request: Request, response: Response) => {
  try {
    const existingPassword = UserModel.findOne({
      _id: request.params.eid,
    }).select("password");

    if (
      request.body.password !== null &&
      request.body.password !== existingPassword
    )
      request.body.password = bcrypt.hash(request.body.password, 10);

    const user: IUser | null = await UserModel.findByIdAndUpdate(
      request.params.eid,
      {
        ...request.body,
      }
    );
    if (!user) response.status(401);
    response.status(200).send(user);
  } catch (error) {
    console.error(`[ERROR] ${error}`);
    response.status(401);
  }
});

router.delete("/:eid", (request: Request, response: Response) => {});

export default router;
