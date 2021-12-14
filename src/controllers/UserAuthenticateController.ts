import { Request, Response } from "express";

import { UserAuthenticateService } from "../services/UserAuthenticateService";

class UserAuthenticateController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const service = new UserAuthenticateService();

    const token = await service.execute({ username, password });

    return res.json(token);
  }
}

export { UserAuthenticateController };
