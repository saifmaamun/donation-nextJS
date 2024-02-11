import { Model } from "mongoose";

// donation posts interface
export type IDonated = {
  id: string;
  title: string;
  amount: number;
  email: string;
};

export type DonatedModel = Model<IDonated, Record<string, unknown>>;
