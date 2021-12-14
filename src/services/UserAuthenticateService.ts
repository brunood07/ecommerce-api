import CryptoJS from "crypto-js";
import { sign } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import User from "../models/User";

interface IRequest {
  username: string;
  password: string;
}

class UserAuthenticateService {
  async execute({ username, password }: IRequest) {
    const user = await User.findOne({ username });

    if (!user) throw new AppError("username or password incorrect!");

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      String(process.env.PASS_SECRET)
    );

    const decryptedPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== password)
      throw new AppError("username or password is incorrect!");

    const token = sign({}, String(process.env.JWT_SECRET), {
      subject: user.id,
      expiresIn: "3d",
    });

    return token;
  }
}

export { UserAuthenticateService };
