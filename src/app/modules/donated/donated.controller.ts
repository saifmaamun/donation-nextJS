import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IDonated } from "./donated.interface";
import { DonatedService } from "./donated.service";

// add donated data
const addData = catchAsync(async (req: Request, res: Response) => {
  const post = req.body;
  const result = await DonatedService.addDonatedData(post);
  sendResponse<IDonated>(res, {
    statusCode: 200,
    success: true,
    message: "Data added successfully",
    data: result,
  });
});

// get all posts
const getAllData = catchAsync(async (req: Request, res: Response) => {
  const result = await DonatedService.getAllDonatedData();
  sendResponse<IDonated[]>(res, {
    statusCode: 200,
    success: true,
    message: "All Data received",
    data: result,
  });
});

export const DonatedController = {
  addData,
  getAllData,
};
