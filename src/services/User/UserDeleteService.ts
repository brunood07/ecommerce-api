import User from "../../database/model/User";
import { AppError } from "../../errors/AppError";

class UserDeleteService {
  async execute(id: string) {
    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) throw new AppError("User not exists!");

    return deletedUser;
  }
}

export { UserDeleteService };
