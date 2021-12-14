import { Request, Response } from "express";

import { UserLoginService } from "../services/UserLoginService";

class UserLoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const service = new UserLoginService();

    const login = await service.execute({ username, password });

    return res.status(200).send("Logged in!");
  }
}

export { UserLoginController };
