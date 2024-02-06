import { IUser } from "./user.interface";
import { User } from "./user.model";

// sign up New User
const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error(" user creation failed");
  }
  console.log("user created", createdUser);
  return createdUser;
};

// login user
const loginUser = async (user: IUser): Promise<IUser> => {
  const loggedUser = await User.findOne({ email: user.email });
  console.log(loggedUser);
  if (!loggedUser) {
    throw new Error("User not found");
  } else if (loggedUser.password !== user.password) {
    throw new Error("Invlid Password");
  } else {
  }
  return loggedUser;
};

// get all users from the database
const getAllUSers = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const userService = {
  createUser,
  loginUser,
  getAllUSers,
};
