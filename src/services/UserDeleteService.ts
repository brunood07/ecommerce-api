import { AppError } from "../errors/AppError";
import User from "../models/User";

class UserDeleteService {
  async execute(id: string) {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) throw new AppError("User not exists!");

    return deletedUser;
  }
}

export { UserDeleteService };
