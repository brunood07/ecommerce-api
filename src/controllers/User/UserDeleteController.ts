import { Request, Response } from "express";

import { UserDeleteService } from "../../services/User/UserDeleteService";

class UserDeleteController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const service = new UserDeleteService();

    await service.execute(id);

    return res.status(200).send("User deleted!");
  }
}

export { UserDeleteController };
