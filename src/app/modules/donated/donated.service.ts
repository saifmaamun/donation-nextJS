import { IDonated } from "./donated.interface";
import { Donated } from "./donated.model";

// add new Donated data
const addDonatedData = async (data: IDonated): Promise<IDonated> => {
  const donatedData = await Donated.create(data);

  return donatedData;
};

// get all donated data
const getAllDonatedData = async (): Promise<IDonated[]> => {
  const data = await Donated.find();
  return data;
};

export const DonatedService = {
  addDonatedData,
  getAllDonatedData,
};
