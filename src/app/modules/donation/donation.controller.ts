import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IDonation } from "./donation.interface";
import { DonationService } from "./donation.service";

// add post
const addPPost = catchAsync(async (req: Request, res: Response) => {
  const post = req.body;
  const result = await DonationService.addDonationPost(post);
  sendResponse<IDonation>(res, {
    statusCode: 200,
    success: true,
    message: "Post added successfully",
    data: result,
  });
});

// get all posts
const getAllPosts = catchAsync(async (req: Request, res: Response) => {
  const result = await DonationService.getAllDonationPost();
  sendResponse<IDonation[]>(res, {
    statusCode: 200,
    success: true,
    message: "All Post received",
    data: result,
  });
});

// get single post
const getSinglePost = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await DonationService.getSingleDonationPost(id);
  sendResponse<IDonation>(res, {
    statusCode: 200,
    success: true,
    message: "Post received successfully",
    data: result,
  });
});

// update single Post
const updatePost = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedPost = req.body;
  const result = await DonationService.updateDonationPost(id, updatedPost);
  sendResponse<IDonation>(res, {
    statusCode: 200,
    success: true,
    message: "Post updated successfully",
    data: result,
  });
});

// delete Product
const deletePost = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await DonationService.deleteDonationPost(id);
  sendResponse<IDonation>(res, {
    statusCode: 200,
    success: true,
    message: "Post deleted successfully",
    data: result,
  });
});

export const DonationController = {
  addPPost,
  getAllPosts,
  getSinglePost,
  updatePost,
  deletePost,
};
