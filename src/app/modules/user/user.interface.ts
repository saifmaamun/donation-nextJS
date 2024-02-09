import { Model } from "mongoose";

// user interface
export type IUser = {
  id?: string;
  name?: string;
  email: string;
  password: string;
  role: "admin" | "user";
};

export type UserModel = Model<IUser, Record<string, unknown>>;
