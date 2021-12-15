import { instanceToInstance } from "class-transformer";

import { IUser } from "../database/model/User";

class UserMap {
  static toDTO({ username, full_name, email, cpf, phone, address, id }: IUser) {
    const user = instanceToInstance({
      username,
      full_name,
      email,
      cpf,
      phone,
      address,
      id,
    });

    return user;
  }
}

export { UserMap };
