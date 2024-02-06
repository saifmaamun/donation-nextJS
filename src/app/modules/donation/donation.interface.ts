import { Model } from "mongoose";

// donation posts interface
export type IDonation = {
  id?: string;
  category: string;
  title: string;
  details: string;
  img_url: string;
  theme_url: string;
  donation_amount: number;
};

export type DonationModel = Model<IDonation, Record<string, unknown>>;
