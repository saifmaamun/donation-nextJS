import { IDonation } from "./donation.interface";
import { Donation } from "./donation.model";

// add new Donation post
const addDonationPost = async (donation: IDonation): Promise<IDonation> => {
  const donationPost = await Donation.create(donation);
  if (!donationPost) {
    throw new Error();
  }
  return donationPost;
};

// get all donation posts
const getAllDonationPost = async (): Promise<IDonation[]> => {
  const products = await Donation.find();
  return products;
};

// get single donation post
const getSingleDonationPost = async (id: string): Promise<IDonation | null> => {
  const query = { _id: id };
  const post = await Donation.findOne(query);
  if (!post) {
    throw new Error();
  }
  return post;
};

// update donation post
const updateDonationPost = async (id: string, payload: Partial<IDonation>) => {
  const query = { _id: id };
  const isExist = await Donation.findOne(query);
  if (!isExist) {
    throw new Error();
  }
  const { ...postData } = payload;
  const updatedPost = { ...postData };
  const result = await Donation.findOneAndUpdate(query, updatedPost, {
    new: true,
  });
  return result;
};

// delete donation post
const deleteDonationPost = async (id: string): Promise<IDonation | null> => {
  const query = { _id: id };
  const result = await Donation.findByIdAndDelete(query);
  return result;
};

export const DonationService = {
  addDonationPost,
  getAllDonationPost,
  getSingleDonationPost,
  updateDonationPost,
  deleteDonationPost,
};
