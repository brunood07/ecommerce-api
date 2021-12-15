import { Request, Response } from "express";

import { UserUpdateService } from "../../services/User/UserUpdateService";

class UserUpdateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { full_name, cpf, address, phone } = req.body;

    const service = new UserUpdateService();

    const update = await service.execute({
      id,
      full_name,
      cpf,
      address,
      phone,
    });

    return res.status(200).send(update);
  }
}

export { UserUpdateController };
