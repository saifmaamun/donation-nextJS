import { Schema, model } from "mongoose";

import { DonatedModel, IDonated } from "./donated.interface";

export const DonatedSchema = new Schema<IDonated, DonatedModel>({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
});

export const Donated = model<IDonated, DonatedModel>("Donated", DonatedSchema);
