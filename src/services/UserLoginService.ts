import CryptoJS from "crypto-js";

import { AppError } from "../errors/AppError";
import User, { IUser } from "../models/User";

interface IRequest {
  username: string;
  password: string;
}

class UserLoginService {
  async execute({ username, password }: IRequest): Promise<IUser> {
    const user = await User.findOne({ username });

    if (!user) throw new AppError("username or password is incorrect!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      String(process.env.PASS_SECRET)
    );

    const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== password)
      throw new AppError("username or password is incorrect!");

    return user;
  }
}

export { UserLoginService };
