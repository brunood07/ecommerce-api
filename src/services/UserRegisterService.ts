import User, { IUser } from "../models/User";

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
    const newUser = new User({
      username,
      full_name,
      email,
      password,
      cpf,
      address,
      phone,
    });

    const createUser = newUser.save();

    return createUser;
  }
}

export { UserRegisterService };
