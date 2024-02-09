import { bcryptHelper } from "../../../shared/bycryptHelper";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export type TLoginUser = {
  email: string;
  password: string;
};

// sign up New User
const createUser = async (user: IUser): Promise<IUser | null> => {
  const hashedPassword = await bcryptHelper.hashPassword(user.password);
  const createdUser = await User.create({ ...user, hashedPassword });
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
// const loginUser = async (payload: TLoginUser) => {
//   // checking the user's existanced
//   const user = await User.findOne({
//     email: payload.email,
//   });

//   if (!user) {
//     throw new Error("This user is not found !");
//   }

//   const isPasswordMatched = await bcryptHelper.isPasswordMatched(
//     payload?.password,
//     user?.password
//   );
//   if (!isPasswordMatched) {
//     throw new Error("Password do not matched");
//   }
//   const { password, ...restUserInfo } = user.toJSON();

//   return restUserInfo;
// };

// get all users from the database
const getAllUSers = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const UserService = {
  createUser,
  loginUser,
  getAllUSers,
};
