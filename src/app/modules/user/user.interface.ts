import { Model } from "mongoose";
import { IUserDonation } from "../../interfaces/IUserDonation";

// user interface
export type IUser = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  role: "admin" | "user";
  donation?: IUserDonation[];
};

export type UserModel = Model<IUser, Record<string, unknown>>;
