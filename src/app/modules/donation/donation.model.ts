import { Schema, model } from "mongoose";
import { DonationModel, IDonation } from "./donation.interface";

export const DonationSchema = new Schema<IDonation, DonationModel>({
  id: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  img_url: {
    type: String,
    required: true,
  },
  theme_url: {
    type: String,
    required: true,
  },
  donation_amount: {
    type: Number,
    required: true,
  },
});

export const Donation = model<IDonation, DonationModel>(
  "Donation",
  DonationSchema
);
