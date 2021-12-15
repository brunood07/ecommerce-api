import { UserMap } from "../mapper/UserMap";
import User, { IUser } from "../models/User";

class UserProfileService {
  async execute(id: string) {
    const user = await User.findById(id);

    return UserMap.toDTO(user as IUser);
  }
}

export { UserProfileService };
