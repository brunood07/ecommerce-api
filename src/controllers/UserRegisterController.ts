import { Request, Response } from "express";

import { UserRegisterService } from "../services/UserRegisterService";

class UserRegisterController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, full_name, email, password, cpf, address, phone } =
      req.body;

    const service = new UserRegisterService();

    const user = service.execute({
      username,
      full_name,
      email,
      password,
      cpf,
      address,
      phone,
    });

    return res.status(201).send(user);
  }
}

export { UserRegisterController };
