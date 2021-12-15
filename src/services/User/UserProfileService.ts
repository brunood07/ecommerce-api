import User, { IUser } from "../../database/model/User";
import { UserMap } from "../../mapper/UserMap";

class UserProfileService {
  async execute(id: string) {
    const user = await User.findById(id);

    return UserMap.toDTO(user as IUser);
  }
}

export { UserProfileService };
