import { Model } from "mongoose";

// donation posts interface
export type IDonated = {
  id: string;
  email: string;
};

export type DonatedModel = Model<IDonated, Record<string, unknown>>;
