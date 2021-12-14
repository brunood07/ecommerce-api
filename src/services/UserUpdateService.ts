import User from "../models/User";

interface IRequest {
  id: string;
  full_name?: string;
  cpf?: string;
  address?: string;
  phone?: string;
}

class UserUpdateService {
  async execute({ id, full_name, cpf, address, phone }: IRequest) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: { full_name, cpf, address, phone },
      },
      { new: true }
    );

    return updatedUser;
  }
}

export { UserUpdateService };
