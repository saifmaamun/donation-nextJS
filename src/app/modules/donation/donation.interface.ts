import { Model } from "mongoose";
import { donationHistory } from "../../interfaces/donationHistory";

// donation posts interface
export type IDonation = {
  id?: string;
  category: string;
  title: string;
  details: string;
  img_url: string;
  theme_url: string;
  donation_amount: number;
  donation?: donationHistory[];
};

export type DonationModel = Model<IDonation, Record<string, unknown>>;
