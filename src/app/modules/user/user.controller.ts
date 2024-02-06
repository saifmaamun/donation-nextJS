import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { UserService } from "./user.service";
import sendResponse from "../../../shared/sendResponse";
import { IUser } from "./user.interface";

// sign up user
const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.createUser(user);
  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: "user created successfully",
    data: result,
  });
});

// login user
const loginUser = catchAsync(async (req: Request, res: Response) => {
  const user = req.body;
  const result = await UserService.loginUser(user);
  sendResponse<IUser>(res, {
    statusCode: 200,
    success: true,
    message: "user logged in successfully",
    data: result,
  });
});

// all users
const getAllUSers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUSers();
  sendResponse<IUser[]>(res, {
    statusCode: 200,
    success: true,
    message: "All Users Retrived",
    data: result,
  });
});

export const UserController = {
  createUser,
  loginUser,
  getAllUSers,
};
