import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";

// user Schema
export const UserSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
    },
    donation: {
      type: Array,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const User = model<IUser, UserModel>("User", UserSchema);
