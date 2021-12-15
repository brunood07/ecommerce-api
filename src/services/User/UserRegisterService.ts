import CryptoJS from "crypto-js";

import User, { IUser } from "../../database/model/User";

class UserRegisterService {
  async execute({
    username,
    full_name,
    email,
    password,
    cpf,
    address,
    phone,
  }: IUser): Promise<IUser> {
    const passwordHash = CryptoJS.AES.encrypt(
      password,
      String(process.env.PASS_SECRET)
    );

    const newUser = new User({
      username,
      full_name,
      email,
      password: passwordHash,
      cpf,
      address,
      phone,
    });

    const createUser = newUser.save();

    return createUser;
  }
}

export { UserRegisterService };
